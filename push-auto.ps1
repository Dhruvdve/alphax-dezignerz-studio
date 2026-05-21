$ErrorActionPreference = "Continue"
$repo = $PSScriptRoot
$log = Join-Path $repo "push-auto-log.txt"
Set-Location $repo
"" | Set-Content $log -Encoding UTF8

function Log($m) {
  $line = "$(Get-Date -Format 'HH:mm:ss') $m"
  Add-Content $log $line -Encoding UTF8
  Write-Output $line
}

Log "=== PUSH AUTO START ==="
Log "PWD=$repo"

if (Test-Path "public\portfolio\videos\reel-6.mp4") {
  $mb = [math]::Round((Get-Item "public\portfolio\videos\reel-6.mp4").Length / 1MB, 2)
  Log "reel-6.mp4 size: ${mb} MB"
}

git status -sb 2>&1 | ForEach-Object { Log $_ }
git log -1 --oneline 2>&1 | ForEach-Object { Log $_ }

Log "--- filter-branch (remove old 146MB reel-6 from history) ---"
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/portfolio/videos/reel-6.mp4" --prune-empty HEAD 2>&1 | ForEach-Object { Log $_ }

git add -A 2>&1 | ForEach-Object { Log $_ }
git commit -m "Go live: portfolio images, videos, logo, Calendly, LinkedIn" 2>&1 | ForEach-Object { Log $_ }

Log "--- pull --rebase ---"
git pull --rebase origin main 2>&1 | ForEach-Object { Log $_ }

Log "--- push ---"
git push -u origin main 2>&1 | ForEach-Object { Log $_ }
if ($LASTEXITCODE -ne 0) {
  Log "--- push failed; trying --force ---"
  git push -u origin main --force 2>&1 | ForEach-Object { Log $_ }
}

Log "EXIT=$LASTEXITCODE"
Log "HEAD=$(git rev-parse HEAD 2>&1)"
Log "=== DONE — check https://github.com/Dhruvdve/alphax-dezignerz-studio/commits/main ==="

if ($LASTEXITCODE -eq 0) {
  Write-Host "`nSUCCESS — Vercel will deploy in 2-3 min. Hard refresh: https://www.alphaxdezignerzstudio.com`n" -ForegroundColor Green
} else {
  Write-Host "`nPUSH FAILED — see push-auto-log.txt in the project folder`n" -ForegroundColor Red
}
