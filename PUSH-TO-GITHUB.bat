@echo off
cd /d "%~dp0"
echo.
echo IMPORTANT: This folder must contain package.json AND src\app\
echo Current folder: %CD%
echo.

if not exist "src\app" (
  echo ERROR: src\app not found here.
  echo Open the INNER project folder, not the parent wrapper.
  echo Expected: C:\Users\intel\alphax-dezignerz-studio
  pause
  exit /b 1
)

echo Pushing to: https://github.com/Dhruvdve/alphax-dezignerz-studio
echo.

if not exist .git (
  git init
  git branch -M main
  git remote add origin https://github.com/Dhruvdve/alphax-dezignerz-studio.git
)

git add -A
git status
echo.
git commit -m "Update site: latest FAQ, testimonials, portfolio, booking, SEO"
echo.
git pull origin main --rebase 2>nul
git push -u origin main
echo.
if errorlevel 1 (
  echo PUSH FAILED - try: gh auth login
) else (
  echo SUCCESS - Vercel will redeploy in 1-3 min
  echo On Vercel set Root Directory to "." if files are at repo root after this push
)
pause
