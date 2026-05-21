@echo off
cd /d "%~dp0"
echo Pushing to GitHub: Dhruvdve/alphax-dezignerz-studio
echo.

if not exist .git (
  git init
  git branch -M main
  git remote add origin https://github.com/Dhruvdve/alphax-dezignerz-studio.git
)

git add -A
git status
echo.
git commit -m "Update site: FAQ, testimonials, portfolio, booking, SEO" 2>nul
if errorlevel 1 echo No new changes to commit, or commit skipped.
echo.
git push -u origin main
echo.
if errorlevel 1 (
  echo PUSH FAILED. Common fixes:
  echo 1. Create repo at https://github.com/new named alphax-dezignerz-studio
  echo 2. Sign in: gh auth login   OR use GitHub Desktop
  echo 3. Use Personal Access Token as password when git asks
) else (
  echo SUCCESS. Vercel will redeploy in 1-3 minutes.
)
pause
