@echo off

rem :: https://github.com/zquestz/ws-tcp-proxy
rem :: https://github.com/zquestz/ws-tcp-proxy/releases/download/v0.1.1/ws-tcp-proxy-windows_amd64.zip
set PATH=C:\PortableApps\ws-tcp-proxy\0.1.1;%PATH%

ws-tcp-proxy "142.250.176.14:80" --port "3000"
