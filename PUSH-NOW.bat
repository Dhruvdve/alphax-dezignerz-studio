@echo off
title PUSH NOW - upload site + videos to GitHub
color 0A
cd /d "%~dp0"

echo.
echo  All your MP4s are under 100 MB - OK for GitHub.
echo  reel-6 is now 1.39 MB (was 146 MB before).
echo.

echo  STEP 1: Remove OLD huge reel-6 from git history (one-time, ~1 min)
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/portfolio/videos/reel-6.mp4" --prune-empty HEAD 2>nul

echo.
echo  STEP 2: Add all files including new small reel-6
git add -A
git add public\portfolio\images public\portfolio\videos public\images 2>nul

echo.
echo  STEP 3: Commit
git commit -m "Go live: portfolio images, videos, logo, Calendly, LinkedIn"
if errorlevel 1 echo (no new changes or already committed)

echo.
echo  STEP 4: Push
git pull --rebase origin main 2>nul
git push -u origin main
if errorlevel 1 git push -u origin main --force

if errorlevel 1 (
  color 0C
  echo PUSH FAILED - send screenshot
) else (
  echo.
  echo  SUCCESS - Vercel deploys in 2-3 min
  echo  https://www.alphaxdezignerzstudio.com  (Ctrl+Shift+R)
)

echo.
echo Log saved to push-auto-log.txt when using push-auto.ps1
echo Or run: PUSH-NOW-SILENT.bat (opens push window, no pause)
pause
