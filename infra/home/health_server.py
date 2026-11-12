"""Connectivity probe only; no users, files, secrets or production API."""
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ORIGINS = {"https://sportfondhm.ru", "https://app.sportfondhm.ru", "https://map.sportfondhm.ru"}

class Handler(BaseHTTPRequestHandler):
    server_version = "SportfondProbe/1"
    sys_version = ""

    def log_message(self, format, *args):
        pass

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        ok = path in ("/", "/health")
        body = json.dumps(
            {"status": "ok", "service": "sportfond-connectivity-probe", "production_api": False}
            if ok else {"error": "not_found"}
        ).encode()
        self.send_response(200 if ok else 404)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        origin = self.headers.get("Origin")
        if origin in ORIGINS:
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")
        self.end_headers()
        self.wfile.write(body)

if __name__ == "__main__":
    ThreadingHTTPServer(("0.0.0.0", 8765), Handler).serve_forever()
