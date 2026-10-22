#!/bin/sh
# Build the folder to upload to a website: sh tools/build-hosted.sh [https://giasu.ai.vn/word-addin]
# Result: hosted/ (static files + manifest.xml pointing at that address). Nothing is uploaded by this script.
set -e
cd "$(dirname "$0")/.."
BASE="${1:-https://giasu.ai.vn/word-addin}"
BASE="${BASE%/}"
ORIGIN=$(echo "$BASE" | sed -E 's#^(https://[^/]+).*#\1#')
rm -rf hosted
mkdir -p hosted/taskpane hosted/src
sh tools/bundle.sh
cp taskpane/*.html taskpane/*.css taskpane/*.js taskpane/*.png hosted/taskpane/
cp -R taskpane/katex hosted/taskpane/ 2>/dev/null || true
cp src/mtefchars.js src/mathtype-template.js hosted/src/ 2>/dev/null || true
[ -f taskpane/qr-bidv.jpg ] && cp taskpane/qr-bidv.jpg hosted/taskpane/
rm -f hosted/taskpane/mock-word.js   # development stand-in for Word, not needed online
cp src/*.js hosted/src/
cp -R src/figures hosted/src/figures
mkdir -p hosted/taskpane/vendor && cp -R taskpane/vendor/* hosted/taskpane/vendor/
# public manifests are written for https://giasu.ai.vn/word-addin; point them at BASE (lite = manifest.xml, full = manifest-full.xml)
for M in manifest manifest-full; do sed -e "s#https://giasu.ai.vn/word-addin#$BASE#g" -e "s#<AppDomain>https://giasu.ai.vn</AppDomain>#<AppDomain>$ORIGIN</AppDomain>#" $M.xml > hosted/$M.xml; done
node tools/build-sw.mjs hosted
# GitHub Pages copies the source folder directly, so it needs the same cache revision as hosted/.
cp hosted/sw.js sw.js
echo "Built hosted/ for $BASE"
