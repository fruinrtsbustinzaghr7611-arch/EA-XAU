#!/usr/bin/env bash
set -euo pipefail
PORT="${1:-4173}"
URL="http://127.0.0.1:${PORT}/preview.html"
echo "✅ 预览服务已启动"
echo "请在浏览器打开: ${URL}"
python3 -m http.server "${PORT}"
