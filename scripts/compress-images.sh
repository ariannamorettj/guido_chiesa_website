#!/usr/bin/env bash
# Comprime le foto di public/images/ al 70% di qualità JPEG (max 1920px sul lato lungo).
# Gli originali vengono prima copiati in public/images-hd/ come backup gitignored.
#
# Uso: bash scripts/compress-images.sh

set -euo pipefail

SRC="public/images"
HD="public/images-hd"
QUALITY=70
MAX_PX=1920

cd "$(dirname "$0")/.."

echo "→ Copio gli originali in $HD/ (backup)…"
rsync -a --progress "$SRC/" "$HD/"

echo ""
echo "→ Comprimo tutte le immagini JPEG in $SRC/ …"

total=$(find "$SRC" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | wc -l | tr -d ' ')
count=0

find "$SRC" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r f; do
  count=$((count + 1))
  printf "\r  [%d/%d] %s" "$count" "$total" "$(basename "$f")"
  sips -s formatOptions "$QUALITY" --resampleHeightWidthMax "$MAX_PX" "$f" --out "$f" > /dev/null 2>&1
done

echo ""
echo ""
echo "✓ Fatto. Dimensione originale:"
du -sh "$HD"
echo "✓ Dimensione compressa:"
du -sh "$SRC"
