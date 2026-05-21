@echo off
title AlphaX - Fix and Go Live
color 0B
cd /d "%~dp0"

echo.
echo   ============================================
echo     ALPHAX WEBSITE - START HERE
echo   ============================================
echo.
echo   This will send your website to GitHub.
echo   Vercel will update automatically after.
echo.
pause

if not exist "src\app\page.tsx" (
  color 0C
  echo.
  echo   WRONG FOLDER. Open this file from:
  echo   C:\Users\intel\alphax-dezignerz-studio
  echo.
  pause
  exit /b 1
)

echo.
echo   Step 1: Saving to GitHub...
echo   --------------------------------------------
git add -A
git commit -m "Fix build and update site" 2>nul
git push origin main

if errorlevel 1 (
  color 0E
  echo.
  echo   Push had a problem. Try signing in when Git asks.
  echo   Or use GitHub Desktop - see HELP-ME-SIMPLE.txt
  echo.
) else (
  color 0A
  echo.
  echo   SUCCESS! Code sent to GitHub.
  echo.
)

echo.
echo   ============================================
echo   NOW DO THIS ON YOUR BROWSER (2 minutes):
echo   ============================================
echo.
echo   1. Open:  https://vercel.com/dashboard
echo   2. Click your project name
echo   3. Click "Deployments" at the top
echo   4. Wait until you see green "Ready"
echo   5. Click the "Visit" button
echo.
echo   If no project exists:
echo   - Click "Add New" - "Project"
echo   - Pick: Dhruvdve / alphax-dezignerz-studio
echo   - Root Directory: pick the one with (root) and N logo
echo   - Click Deploy
echo.
echo   ============================================
echo.
start https://vercel.com/dashboard
notepad "%~dp0HELP-ME-SIMPLE.txt"
pause
