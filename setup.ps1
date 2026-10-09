# One-time setup script — run in PowerShell from the project root
$ErrorActionPreference = "Stop"

Write-Host "=== Tanishq Portfolio Setup ===" -ForegroundColor Cyan

# 1. Copy resume PDF
$resumeSrc = "C:\Users\tanis\Downloads\Resume\Tanishq_AIProductOwner_Resume.pdf"
$resumeDest = "$PSScriptRoot\public\resume\Tanishq_AIProductOwner_Resume.pdf"

if (-not (Test-Path "$PSScriptRoot\public\resume")) {
    New-Item -ItemType Directory -Path "$PSScriptRoot\public\resume" -Force | Out-Null
}

if (Test-Path $resumeSrc) {
    Copy-Item $resumeSrc $resumeDest -Force
    Write-Host "[OK] Resume copied to public/resume/" -ForegroundColor Green
} else {
    Write-Host "[WARN] Resume not found at $resumeSrc — copy it manually." -ForegroundColor Yellow
}

# 2. Install dependencies
Write-Host "Installing npm dependencies..." -ForegroundColor Cyan
Set-Location $PSScriptRoot
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Dependencies installed." -ForegroundColor Green
    Write-Host ""
    Write-Host "Run the dev server:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host "Then open http://localhost:3000" -ForegroundColor White
} else {
    Write-Host "[ERROR] npm install failed. Check Node.js is installed (node -v)." -ForegroundColor Red
    exit 1
}
