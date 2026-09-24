#!/usr/bin/env bash
# Install only Font Awesome 5 Free 5.15.4, rather than texlive-fonts-extra.
set -euo pipefail
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
curl --fail --location --retry 3 --max-time 120 \
  https://mirrors.ctan.org/fonts/fontawesome5.zip -o "$work/fontawesome5.zip"
printf '%s  %s\n' '83c86c8a92d80e0b2c84af78a055d10798f8294f63b397ba8225351b9eaaa500' "$work/fontawesome5.zip" | sha256sum --check
unzip -q "$work/fontawesome5.zip" -d "$work"
texmf=$(kpsewhich -var-value=TEXMFLOCAL)
sudo install -d "$texmf/tex/latex/fontawesome5"
sudo cp "$work/fontawesome5/tex/"* "$texmf/tex/latex/fontawesome5/"
for kind in enc map tfm type1 opentype; do
  sudo install -d "$texmf/fonts/$kind/public/fontawesome5"
  sudo cp "$work/fontawesome5/$kind/"* "$texmf/fonts/$kind/public/fontawesome5/"
done
sudo mktexlsr
sudo updmap-sys --enable Map=fontawesome5.map
kpsewhich fontawesome5.sty
