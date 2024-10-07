@echo off

set bin_js="%~dp0..\..\server\bin\index.js"

echo Open in browser: http://localhost:3000/
echo.

node %bin_js% -b "/api/vm/net" -o "true" -d "./htdocs" -p 3000
