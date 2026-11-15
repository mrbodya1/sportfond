# Partnership enquiries — 2026-11-15

Portal and WOOD TRAIL use a modal with name, email and explicit consent. POST https://api.sportfondhm.ru/api/partners, source portal/woodtrail. Browser does not send login cookies.
Backend stores in partnership_requests in private app.sqlite3, included in daily backup. Status waiting_presentation, no automatic email while presentation absent. Authenticated administrator may GET /api/admin/partners. Do not expose data in GitHub.
Backend source: mrbodya1/sportfond-app branch feature/partner-enquiries, active home runtime D:/Projects/sportfond-app/backend.
Testing:23 server tests passed. Real HTTPS validation and CORS passed via local host resolution; UI success tested with intercepted response. No fake production enquiries saved. Public WAN API connectivity still needs phone/mobile verification; local TLS and API healthy. Form reports errors rather than claiming success on network failure.
Registration WOOD TRAIL: verified main event page on Racetime; separate packet links could not be verified because public event content currently lacks visible slots. Link https://racetime.online/sportfondhm/woodtrail27#409665600.
