@echo off

call browserify "%~dp0./src/client.js" -o "%~dp0./htdocs/bundle.js"

echo.
pause
