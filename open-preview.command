#!/usr/bin/env bash
set -euo pipefail
PORT="${1:-4173}"
URL="http://127.0.0.1:${PORT}/preview.html"
if command -v open >/dev/null 2>&1; then
  open "${URL}"
fi
python3 -m http.server "${PORT}"
