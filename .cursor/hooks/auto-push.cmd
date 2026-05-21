@echo off
cd /d "C:\Users\intel\alphax-dezignerz-studio"
if exist push-auto.ps1 (
  start "AlphaX — GitHub push" powershell -NoProfile -ExecutionPolicy Bypass -File "C:\Users\intel\alphax-dezignerz-studio\push-auto.ps1"
)
exit /b 0
