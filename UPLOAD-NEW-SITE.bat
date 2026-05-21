@echo off
title Upload NEW site to GitHub
color 0A
cd /d "%~dp0"

echo ============================================
echo  Upload NEW AlphaX site (replaces old GitHub)
echo ============================================
echo Folder: %CD%
echo.

if not exist "src\app\page.tsx" (
  echo [ERROR] Wrong folder. Open:
  echo   C:\Users\intel\alphax-dezignerz-studio
  echo This folder must contain src\app\page.tsx
  pause
  exit /b 1
)

echo [OK] Found src\app\page.tsx - this is the NEW site.
echo.

where git >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Git not installed. Install from https://git-scm.com/download/win
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

echo.
echo Staging ALL files...
git add -A
git status

echo.
echo Committing...
git commit -m "Deploy new site: FAQ, testimonials, portfolio, booking, SEO, process sections" 2>nul
if errorlevel 1 (
  echo Nothing new to commit OR commit failed.
)

echo.
echo Pushing to GitHub (you may be asked to sign in)...
git push -u origin main --force

if errorlevel 1 (
  echo.
  echo ============================================
  echo  PUSH FAILED - use GitHub website instead:
  echo ============================================
  echo 1. Open https://github.com/Dhruvdve/alphax-dezignerz-studio
  echo 2. Delete the folder "alphax-dezignerz-studio" inside the repo if you see it
  echo 3. Upload files from THIS folder - drag everything EXCEPT node_modules and .next
  echo 4. See UPLOAD-NEW-SITE.md for pictures/steps
  echo.
) else (
  echo.
  echo ============================================
  echo  SUCCESS! GitHub has the NEW site.
  echo ============================================
  echo Next on Vercel:
  echo   Settings - General - Root Directory = .  (dot, empty/root)
  echo   Deployments - Redeploy
  echo.
)

pause
