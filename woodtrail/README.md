# WOOD TRAIL redesign

Source backup: D:/Projects/sportfond-woodtrail/woodtrail, unchanged.
Preview: http://127.0.0.1:4177/ via separate Caddy container sportfond-woodtrail-preview.
Standalone static HTML/CSS/JS, no build step. Main + six distance pages + registration coming-soon page.
Style follows sportfondhm.ru: Montserrat/Open Sans, large editorial headings, photography, restrained surfaces. Green palette: #193a2b #366b42 #cfe7a4 #f6f8f1.

## Deferred integration
Registration and payment URLs removed intentionally. No participant JSON is copied or published. No LIMETIME calls or Yandex API key/scripts included.
Volunteer form link is retained from provided public HTML. Partnership contact uses mailto; no fake lead collection.
Distances retain original public informational copy, date and provisional schedule. Owner should confirm these before official launch.
GPX and regulation downloads use supplied files. Route illustrations are original mascots; interactive maps can be connected later.

## Deployment
Preview only, production unchanged. For publication, copy this directory's selected HTML/CSS/JS/images/files into existing sportfond repository woodtrail/ without touching portal root or unrelated apps. Preserve recovery via a separate commit.
Do not copy source backups, data/limetime.json or old scripts. No API credentials or customer data in GitHub.
