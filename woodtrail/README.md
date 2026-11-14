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

Card assets: maskot + distance; relay uses maskot_relay_1-1. Wide headers mapping:700m=maskot1_16-9,1500m=maskot1500_16-9,3km=maskot2_16-9,10km=maskot3_16-9,30km=maskot4_16-9,relay=maskot_relay_16-9. Cards must stay square with distance/age/description over image and hover/focus highlight.
