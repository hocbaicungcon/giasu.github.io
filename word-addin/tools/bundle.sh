#!/bin/sh
# Bundle the task pane into one classic script (taskpane/app.bundle.js) that old Word web views (Edge 18) can run:
# syntax lowered to ES2017, no import()/modules. Run after changing any taskpane/ or src/ script.
set -e
cd "$(dirname "$0")/.."
# ESBUILD_BIN can select an already installed binary for an offline build.
if [ -n "${ESBUILD_BIN:-}" ]; then
  set -- "$ESBUILD_BIN"
else
  set -- npx --yes esbuild@0.21.5
fi
"$@" taskpane/taskpane.js --bundle --format=iife --target=es2017 --outfile=taskpane/app.bundle.js \
  --banner:js='var __BUNDLE_URL__=(document.currentScript&&document.currentScript.src)||location.href;' \
  --define:import.meta.url=__BUNDLE_URL__ --log-level=warning
echo "taskpane/app.bundle.js: $(wc -c < taskpane/app.bundle.js) bytes"
