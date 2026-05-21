@echo off
cd /d "%~dp0"
start "AlphaX — Pushing to GitHub" powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push-auto.ps1"
