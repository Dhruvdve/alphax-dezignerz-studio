@echo off
title Go Live - AlphaX Dezignerz Studio
color 0A
cd /d "%~dp0"

echo ============================================
echo   GO LIVE - Push to GitHub + Vercel deploy
echo ============================================
echo.

where git >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Install Git: https://git-scm.com/download/win
  pause
  exit /b 1
)

if not exist .git (
  echo Initializing git...
  git init
  git branch -M main
)

git remote remove origin 2>nul
git remote add origin https://github.com/Dhruvdve/alphax-dezignerz-studio.git

echo Checking for files over 95 MB (GitHub limit 100 MB)...
powershell -NoProfile -Command "Get-ChildItem -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|\.next|\.git' -and $_.Length -gt 99000000 } | ForEach-Object { Write-Host ('SKIP (too large): ' + $_.FullName) }"

echo Staging all files...
git add -A
git add public\portfolio\images public\portfolio\videos public\images 2>nul
git reset public\portfolio\videos\reel-6.mp4 2>nul

echo.
git status
echo.

git commit -m "Go live: portfolio images, Calendly, logo, LinkedIn, faster reel loading"
if errorlevel 1 echo Note: nothing new to commit, or commit failed.

echo.
echo Pulling latest...
git pull --rebase origin main 2>nul
if errorlevel 1 git pull --rebase origin master 2>nul

echo.
echo Pushing to GitHub (sign in if asked)...
git push -u origin main
if errorlevel 1 git push -u origin master

if errorlevel 1 (
  echo.
  echo PUSH FAILED - sign in to GitHub and run again.
  echo Or use: https://github.com/Dhruvdve/alphax-dezignerz-studio
) else (
  echo.
  echo ============================================
  echo   SUCCESS! Vercel will deploy in 2-3 min.
  echo ============================================
  echo   https://vercel.com/sales-7733s-projects/alphax-dezignerz-studio-v2/deployments
  echo   https://www.alphaxdezignerzstudio.com
  echo.
  echo   In Vercel Settings - Environment Variables set:
  echo   NEXT_PUBLIC_CALENDLY_URL = https://calendly.com/alphaxdezignerzstudio-sales/30min
  echo.
)

pause
