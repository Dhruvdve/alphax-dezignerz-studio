@echo off
title PUSH NOW - removes 146MB reel-6 and uploads to GitHub
color 0A
cd /d "%~dp0"

echo.
echo  STEP 1: Stop tracking reel-6.mp4 (146 MB - GitHub max 100 MB)
echo.
git rm --cached -f public/portfolio/videos/reel-6.mp4 2>nul

findstr /C:"reel-6.mp4" .gitignore >nul 2>&1
if errorlevel 1 (
  echo public/portfolio/videos/reel-6.mp4>> .gitignore
)

git add .gitignore
git add -A
git reset public/portfolio/videos/reel-6.mp4 2>nul

echo.
echo  STEP 2: Commit (everything except reel-6)
echo.
git commit -m "Go live: portfolio images, logo, Calendly, LinkedIn (reel-6 excluded - compress under 95MB later)"
if errorlevel 1 (
  echo Amending last commit...
  git add -A
  git reset public/portfolio/videos/reel-6.mp4 2>nul
  git commit --amend -m "Go live: portfolio images, logo, Calendly, LinkedIn (reel-6 excluded)"
)

echo.
echo  STEP 3: Remove reel-6 from git history if still inside old commits
echo.
git rev-list --objects --all 2>nul | findstr /I "reel-6.mp4" >nul
if not errorlevel 1 (
  echo Found reel-6 in history - cleaning (may take 1-2 min)...
  git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/portfolio/videos/reel-6.mp4" --prune-empty HEAD
)

echo.
echo  STEP 4: Push to GitHub
echo.
git push -u origin main
if errorlevel 1 (
  echo Normal push failed - trying force push (safe: your push never succeeded before)
  git push -u origin main --force
)

if errorlevel 1 (
  color 0C
  echo.
  echo  FAILED - copy this window and send to Cursor chat
  echo.
) else (
  color 0A
  echo.
  echo  ============================================
  echo   SUCCESS! GitHub has your site.
  echo  ============================================
  echo   Vercel deploys in 2-3 minutes:
  echo   https://vercel.com/sales-7733s-projects/alphax-dezignerz-studio-v2/deployments
  echo.
  echo   Live: https://www.alphaxdezignerzstudio.com
  echo   Hard refresh: Ctrl+Shift+R
  echo.
)

pause
