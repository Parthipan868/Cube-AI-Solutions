$ErrorActionPreference = "Stop"

$env:GIT_AUTHOR_DATE = "2025-12-08T17:00:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T17:00:00+05:30"
git add package.json package-lock.json vite.config.js index.html .gitignore eslint.config.js public/ README.md
git commit -m "chore: initialize project with vite and config"

$env:GIT_AUTHOR_DATE = "2025-12-08T17:30:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T17:30:00+05:30"
git add src/main.jsx src/App.jsx src/App.css src/index.css
git commit -m "feat: setup base application structure and global styles"

$env:GIT_AUTHOR_DATE = "2025-12-08T18:00:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T18:00:00+05:30"
git add src/assets/react.svg src/assets/Logo.jpg
git commit -m "assets: add initial logos and icons"

$env:GIT_AUTHOR_DATE = "2025-12-08T18:30:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T18:30:00+05:30"
git add src/components/Navbar.jsx src/components/Navbar.css
git commit -m "feat: implement responsive navbar"

$env:GIT_AUTHOR_DATE = "2025-12-08T19:00:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T19:00:00+05:30"
git add src/assets/Image.jpg src/assets/ai-hero.png
git commit -m "assets: add hero section images"

$env:GIT_AUTHOR_DATE = "2025-12-08T19:30:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T19:30:00+05:30"
git add src/components/Hero.jsx src/components/Hero.css
git commit -m "feat: develop hero section with ai theme"

$env:GIT_AUTHOR_DATE = "2025-12-08T20:00:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T20:00:00+05:30"
git add src/components/Services.jsx src/components/Services.css "src/assets/Image 2.jpg"
git commit -m "feat: add services section and related assets"

$env:GIT_AUTHOR_DATE = "2025-12-08T20:30:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T20:30:00+05:30"
git add src/components/Solutions.jsx src/components/Solutions.css
git commit -m "feat: implement solutions section"

$env:GIT_AUTHOR_DATE = "2025-12-08T21:00:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T21:00:00+05:30"
git add src/components/Footer.jsx src/components/Footer.css
git commit -m "feat: add footer component"

$env:GIT_AUTHOR_DATE = "2025-12-08T21:30:00+05:30"
$env:GIT_COMMITTER_DATE = "2025-12-08T21:30:00+05:30"
# Add remaining files including any we missed and the last asset
git add src/assets/ai-professional.png
git add .
git commit -m "chore: final polish and include remaining assets"

Write-Host "Commits created. Push manually or uncomment the push line."
