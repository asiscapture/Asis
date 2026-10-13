@echo off
cd /d "%~dp0"
echo.
echo  Starting a local preview server so clean URLs work
echo  (same as the live site: /from-the-day/ not .../index.html)
echo.
echo  Open: http://127.0.0.1:8765/
echo  Press Ctrl+C in this window to stop the server.
echo.
start "" "http://127.0.0.1:8765/"
python -m http.server 8765
if errorlevel 1 (
  echo.
  echo  Python was not found. Falling back to opening index.html directly.
  echo  Folder links like /from-the-day/ need the server above to work offline.
  echo.
  start "" "%~dp0index.html"
  pause
)
