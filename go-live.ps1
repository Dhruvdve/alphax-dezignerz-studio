$ErrorActionPreference = "Continue"
$log = Join-Path $PSScriptRoot "go-live-log.txt"
Set-Location $PSScriptRoot

function Log($msg) {
  $line = "$(Get-Date -Format 'HH:mm:ss') $msg"
  Add-Content -Path $log -Value $line
  Write-Output $line
}

"" | Set-Content -Path $log
Log "Starting go-live in $PWD"

Log "git version: $(git --version 2>&1)"
Log "git status:"
git status 2>&1 | ForEach-Object { Log $_ }

git add -A 2>&1 | ForEach-Object { Log $_ }
git add public/portfolio/images, public/portfolio/videos, public/images -ErrorAction SilentlyContinue 2>&1 | ForEach-Object { Log $_ }

$msg = "Go live: portfolio images, Calendly, logo, LinkedIn, faster reel loading"
git commit -m $msg 2>&1 | ForEach-Object { Log $_ }

$branch = "main"
git pull --rebase origin $branch 2>&1 | ForEach-Object { Log $_ }
if ($LASTEXITCODE -ne 0) {
  $branch = "master"
  git pull --rebase origin $branch 2>&1 | ForEach-Object { Log $_ }
}

git push -u origin $branch 2>&1 | ForEach-Object { Log $_ }
if ($LASTEXITCODE -ne 0) {
  git push -u origin HEAD 2>&1 | ForEach-Object { Log $_ }
}

Log "HEAD: $(git rev-parse HEAD 2>&1)"
Log "Done exit=$LASTEXITCODE"
