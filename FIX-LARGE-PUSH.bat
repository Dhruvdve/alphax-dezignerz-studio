@echo off
title FIX large videos then push to GitHub
color 0E
cd /d "%~dp0"

echo ============================================
echo   GitHub blocked push - large MP4s in history
echo   reel-6 must be under 100 MB (ideally under 50 MB)
echo   reel-7 at ~89 MB is OK but slow; compress if you can
echo ============================================
echo.

echo Current file sizes on disk:
powershell -NoProfile -Command ^
  "Get-ChildItem 'public\portfolio\videos\*.mp4' -ErrorAction SilentlyContinue | ForEach-Object { $mb=[math]::Round($_.Length/1MB,2); $ok=if($mb -le 95){'OK'}else{'TOO BIG'}; Write-Host ('  {0,-18} {1,8} MB  {2}' -f $_.Name,$mb,$ok) }"
echo.

set "LIMIT=99000000"

echo STEP 1: Remove reel-6 + reel-7 from EVERY commit (1-3 min)...
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/portfolio/videos/reel-6.mp4 public/portfolio/videos/reel-7.mp4" --prune-empty HEAD
if errorlevel 1 (
  echo filter-branch failed - trying without prune...
  git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/portfolio/videos/reel-6.mp4 public/portfolio/videos/reel-7.mp4" HEAD
)

echo.
echo STEP 2: Clean old git objects...
if exist ".git\refs\original" rd /s /q ".git\refs\original"
git reflog expire --expire=now --all 2>nul
git gc --prune=now --aggressive 2>nul

echo.
echo STEP 3: Decide which videos to include (must be under 95 MB each)...
powershell -NoProfile -Command ^
  "$limit=%LIMIT%; $ignore=@(); foreach($n in @('reel-6.mp4','reel-7.mp4')){ $p=Join-Path 'public\portfolio\videos' $n; if(Test-Path $p){ if((Get-Item $p).Length -gt $limit){ $ignore += $p; Write-Host ('  SKIP (too big): ' + $p) } else { Write-Host ('  INCLUDE: ' + $p) } } else { Write-Host ('  MISSING: ' + $p) } }; if($ignore.Count){ '' | Out-File .gitignore-video-skip -Encoding ascii; '# Too large for GitHub - compress then delete these lines' | Add-Content .gitignore-video-skip; $ignore | ForEach-Object { $_ -replace '\\','/' } | Add-Content .gitignore-video-skip }"

if exist .gitignore-video-skip (
  findstr /C:"portfolio/videos/reel-6" .gitignore >nul 2>&1 || type .gitignore-video-skip>> .gitignore
  del .gitignore-video-skip
)

git rm --cached -f public/portfolio/videos/reel-6.mp4 2>nul
git rm --cached -f public/portfolio/videos/reel-7.mp4 2>nul

powershell -NoProfile -Command ^
  "$limit=%LIMIT%; foreach($n in @('reel-6.mp4','reel-7.mp4')){ $p='public/portfolio/videos/'+$n; if((Test-Path $p) -and (Get-Item $p).Length -le $limit){ git add -f $p } }"

echo.
echo STEP 4: Stage everything else...
git add -A
git add public\portfolio\images public\portfolio\videos public\images 2>nul

echo.
echo STEP 5: Commit...
git commit -m "Go live: portfolio, logo, Calendly, LinkedIn (large reels purged from history)"
if errorlevel 1 echo (nothing new to commit - continuing to push)

echo.
echo STEP 6: Push (force needed after history rewrite)...
git pull --rebase origin main 2>nul
git push -u origin main --force

if errorlevel 1 (
  color 0C
  echo.
  echo PUSH STILL FAILED.
  echo If reel-6 on disk is still 146 MB: compress it (HandBrake / online) to under 50 MB.
  echo Then delete this line from .gitignore if present: public/portfolio/videos/reel-6.mp4
  echo Run this script again.
) else (
  color 0A
  echo.
  echo SUCCESS - Vercel deploys in 2-3 min
  echo https://www.alphaxdezignerzstudio.com  (Ctrl+Shift+R)
)

echo.
pause
