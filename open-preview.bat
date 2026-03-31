@echo off
set PORT=4173
start http://127.0.0.1:%PORT%/preview.html
python -m http.server %PORT%
