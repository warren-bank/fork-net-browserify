@echo off

rem :: https://github.com/warren-bank/node-serve
set NO_UPDATE_CHECK=1

echo Open in browser: http://localhost:80/index.html
echo.

call serve --cors --listen "tcp:0.0.0.0:80" "%~dp0.\htdocs"
