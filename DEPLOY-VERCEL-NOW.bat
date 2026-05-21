@echo off
title Deploy to Vercel - AlphaX
cd /d "%~dp0"

echo ==========================================
echo   Deploy NEW site to Vercel (one click)
echo ==========================================
echo.

if not exist "src\app\page.tsx" (
  echo ERROR: Run this from alphax-dezignerz-studio folder.
  pause
  exit /b 1
)

where node >nul 2>&1
if errorlevel 1 (
  echo Install Node.js from https://nodejs.org
  pause
  exit /b 1
)

echo Step 1: Push latest code to GitHub...
git add -A
git commit -m "Trigger Vercel redeploy" 2>nul
git push origin main 2>nul
echo.

echo Step 2: Deploy with Vercel CLI...
echo A browser window may open to log in to Vercel.
echo.
call npx vercel@latest --prod --yes

echo.
echo ==========================================
echo If deploy succeeded, copy the URL shown above.
echo If login failed, use Vercel dashboard instead:
echo   1. vercel.com/dashboard
echo   2. Import Dhruvdve/alphax-dezignerz-studio
echo   3. Root Directory = EMPTY
echo   4. Deploy
echo ==========================================
pause
