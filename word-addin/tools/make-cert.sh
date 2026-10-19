#!/bin/sh
# Self-signed certificate for https://localhost (valid 1 year) in ./certs. Word only loads add-ins from https origins it trusts.
set -e
cd "$(dirname "$0")/.."
mkdir -p certs
openssl req -x509 -newkey rsa:2048 -nodes -days 365 -keyout certs/localhost.key -out certs/localhost.crt -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1" -addext "basicConstraints=critical,CA:FALSE" -addext "keyUsage=digitalSignature,keyEncipherment" -addext "extendedKeyUsage=serverAuth"
echo "Created certs/localhost.crt. Trust it once (asks for your password):"
echo "  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain certs/localhost.crt"
