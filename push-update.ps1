# Run from project root: powershell -ExecutionPolicy Bypass -File push-update.ps1
$ErrorActionPreference = "Stop"
$Log = Join-Path $PSScriptRoot "push-log.txt"
function Log($msg) { "$(Get-Date -Format o) $msg" | Tee-Object -FilePath $Log -Append }

Set-Location $PSScriptRoot
Log "CWD: $(Get-Location)"

if (-not (Test-Path .git)) {
  Log "git init"
  git init
  git branch -M main
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  Log "Adding origin"
  git remote add origin "https://github.com/Dhruvdve/alphax-dezignerz-studio.git"
}

Log "git status"
git status 2>&1 | ForEach-Object { Log $_ }

Log "git add -A"
git add -A 2>&1 | ForEach-Object { Log $_ }

$status = git status --porcelain
if ($status) {
  Log "git commit"
  git commit -m "Launch site: travel branding, FAQ, testimonials, portfolio, booking CTA, SEO" 2>&1 | ForEach-Object { Log $_ }
} else {
  Log "Nothing to commit"
}

Log "git push"
git push -u origin main 2>&1 | ForEach-Object { Log $_ }

Log "DONE exit=$LASTEXITCODE"
