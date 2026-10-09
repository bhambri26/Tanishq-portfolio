#!/bin/bash
set -e

echo "=== Tanishq Portfolio Setup (macOS) ==="

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

# 1. Check for Node.js & npm
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo ""
  echo "❌ Node.js and npm are not installed."
  echo "Please install Node.js (LTS v20 or v22) before continuing:"
  echo "  Option A (Direct Download): https://nodejs.org (Download macOS ARM64 installer)"
  echo "  Option B (Homebrew): brew install node"
  echo "  Option C (NVM): curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash && nvm install 22"
  echo ""
  exit 1
fi

echo "✅ Found Node.js $(node -v) and npm $(npm -v)"

# 2. Setup Resume
RESUME_DEST="$PROJECT_ROOT/public/resume/Tanishq_AIProductOwner_Resume.pdf"
mkdir -p "$PROJECT_ROOT/public/resume"

if [ -f "$RESUME_DEST" ]; then
  echo "✅ Resume already exists at public/resume/Tanishq_AIProductOwner_Resume.pdf"
elif [ -f "$HOME/Downloads/resume.pdf" ]; then
  cp "$HOME/Downloads/resume.pdf" "$RESUME_DEST"
  echo "✅ Copied ~/Downloads/resume.pdf -> public/resume/Tanishq_AIProductOwner_Resume.pdf"
elif [ -f "$HOME/Downloads/Tanishq_AIProductOwner_Resume.pdf" ]; then
  cp "$HOME/Downloads/Tanishq_AIProductOwner_Resume.pdf" "$RESUME_DEST"
  echo "✅ Copied ~/Downloads/Tanishq_AIProductOwner_Resume.pdf -> public/resume/Tanishq_AIProductOwner_Resume.pdf"
else
  echo "⚠️  Resume not found. Please place your PDF at:"
  echo "    public/resume/Tanishq_AIProductOwner_Resume.pdf"
fi

# 3. Install dependencies
echo "📦 Installing npm dependencies..."
npm install

echo ""
echo "🎉 Setup complete! To start your portfolio locally:"
echo "   npm run dev"
echo "Then open: http://localhost:3000"
