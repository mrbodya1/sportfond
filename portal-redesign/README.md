# Sportfond portal

Redesign of sportfondhm.ru, selected design 1, with owner-supplied 12.45 second background video.

## Local development
Node 22+, npm install, npm run dev -- --host 127.0.0.1 --port 4176.
Build: npm run build. Hosting compatibility: npm run test:sites.
Static files: dist/client. Sites worker and metadata are also emitted by the template.

## Content and assets
Original backup remains unchanged in Downloads/backup/root/sportfond/portal.
Assets copied from D:/Projects/sportfond-home/media. Hero video: videoplayback - Trim.mp4 (3.46 MB).
WOOD TRAIL links to its existing page; Cold Games and 9000km references were removed per owner. Event dates omitted until verified.
App and map remain independent services. No keys, participant data or backend in this project.
Video is muted, looping and playsinline; pause control and reduced-motion preference supported.
iOS power saving can prevent autoplay; poster and manual play remain available.

## Publication
This is a preview; production domain/DNS are unchanged. Do not replace the whole production repository: retain woodtrail/coldgames routes and other existing assets.
GitHub recovery source goes in a separate branch and portal-redesign subdirectory, avoiding production workflows.
