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

2026-11-15: Registration buttons now point to verified organizer event https://racetime.online/sportfondhm/woodtrail27#409665600. Per-distance packet URLs were not verified and are not guessed. Partner dialog POSTs name/email/explicit consent/source to api.sportfondhm.ru/api/partners. Presentation is pending; no email sent. Stored in private app.sqlite3 partnership_requests, daily backup included. Public API connectivity currently under investigation; local HTTPS and validation passed.

2026-11-15 corrected integration:
Registration uses Racetime /Buy/Packet/{urlName}?raceUrl=woodtrail27 per distance:700m=kid6run,1500m=kids12run,3km=3km,10km=10km,30km=30km,relay=relay. All six packet urlName values verified with actual API.
Participant GET /api/woodtrail/participants/{slug} on home API. API uses current GET v3/RaceStageRegistrations/List, cache120sec, stage d8f85b33-603b-4983-b82c-bc8e2cf10b7e and six verified groups. Completed, nondeleted records only. Public response allowlist:number,name,city,club,team; no purchaser account fallback or contacts/birthdates. Upstream empty list confirmed; UI displays actual empty state, no demo participants. Tests25Python plus browser six routes/search pass. Secret runtime/private/limetime.env outside repository. Home runtime/backup unchanged; no real registrations created or modified.
