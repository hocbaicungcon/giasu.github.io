#!/bin/sh
# Sideload the add-in into Word for Mac: certificate, manifest, server. Run it from Terminal (not from a sandboxed tool):
#   sh tools/install-mac.sh
set -e
cd "$(dirname "$0")/.."
[ -f certs/localhost.crt ] || sh tools/make-cert.sh
echo "1) Trust the certificate (asks for your Mac password once)"
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain certs/localhost.crt
WEF="$HOME/Library/Containers/com.microsoft.Word/Data/Documents/wef"
echo "2) Copy the manifest into $WEF"
mkdir -p "$WEF"
DEV_MANIFEST="manifest.dev.xml"
[ -f "$DEV_MANIFEST" ] || DEV_MANIFEST="manifest.xml"
cp "$DEV_MANIFEST" "$WEF/texcraft-manifest.xml"
echo "3) Starting the server on https://localhost:3000 - keep this window open."
echo "   Then in Word: Insert > Add-ins > My Add-ins > (Developer Add-ins) > TexCraft Công thức."
node server.js
