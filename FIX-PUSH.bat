@echo off
title Fix GitHub push - large video files
color 0E
cd /d "%~dp0"

echo ============================================
echo   FIX: GitHub blocks files over 100 MB
echo   reel-6.mp4 is 146 MB - must exclude or compress
echo ============================================
echo.

set "LIMIT=99000000"

echo Scanning for large files...
powershell -NoProfile -Command ^
  "$limit=%LIMIT%; $ign=@(); Get-ChildItem -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch '\\node_modules\\|\\.next\\|\\.git\\' -and $_.Length -gt $limit } | ForEach-Object { $rel=$_.FullName.Substring((Get-Location).Path.Length+1).Replace('\','/'); Write-Host ('  TOO LARGE: ' + $rel + ' (' + [math]::Round($_.Length/1MB,1) + ' MB)'); $ign += $rel; git rm --cached -f $rel 2>$null }; if($ign.Count -eq 0){ Write-Host '  No tracked files over 95MB found in folder scan.' } else { $ign | ForEach-Object { Add-Content -Path '.gitignore-large' -Value $_ } }"

echo.
echo Updating .gitignore...
findstr /C:"portfolio/videos/reel-6.mp4" .gitignore >nul 2>&1
if errorlevel 1 (
  echo.>> .gitignore
  echo # GitHub max 100 MB per file — compress MP4s before adding>> .gitignore
  echo public/portfolio/videos/reel-6.mp4>> .gitignore
)

if exist .gitignore-large (
  echo.>> .gitignore
  echo # Auto-excluded oversized files:>> .gitignore
  type .gitignore-large>> .gitignore
  del .gitignore-large
)

git add .gitignore
git add -A
git reset public/portfolio/videos/reel-6.mp4 2>nul

echo.
echo Committing fix...
git commit -m "Fix: exclude reel-6.mp4 over GitHub 100MB limit (compress and re-add later)"
if errorlevel 1 (
  echo Trying amend last commit...
  git commit --amend -m "Go live: site updates without oversized reel-6.mp4"
)

echo.
echo Pushing to GitHub...
git push -u origin main
if errorlevel 1 (
  echo.
  echo If push STILL fails, the large file is in an older commit.
  echo Run in PowerShell:
  echo   git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/portfolio/videos/reel-6.mp4" HEAD
  echo   git push -u origin main --force
  echo.
  echo OR compress reel-6.mp4 under 95 MB and remove the line from .gitignore
)

echo.
pause
