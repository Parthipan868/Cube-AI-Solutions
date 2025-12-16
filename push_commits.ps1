$ErrorActionPreference = "Stop"

# Define the base time (Starts 1 hour ago to finish around now)
$baseTime = (Get-Date).AddMinutes(-60)

# Function to set git date and commit
function Git-Commit-With-Date {
    param (
        [string]$Message,
        [int]$OffsetMinutes
    )
    $commitTime = $baseTime.AddMinutes($OffsetMinutes).ToString("yyyy-MM-ddTHH:mm:ss")
    $env:GIT_AUTHOR_DATE = "$commitTime+05:30"
    $env:GIT_COMMITTER_DATE = "$commitTime+05:30"
    
    # Check if there are changes before committing
    if ((git status --porcelain) -ne $null) {
        git commit -m $Message
        Write-Host "Committed: $Message at $commitTime"
    } else {
        Write-Host "Nothing to commit for: $Message"
    }
}

# 1. Assets Update (Offset 0)
git add src/assets/logo.jpg src/assets/ai-searching.jpg
Git-Commit-With-Date -Message "chore(assets): update brand logo and hero image" -OffsetMinutes 0

# 2. Navbar Update (Offset 15)
git add src/components/Navbar.jsx src/components/Navbar.css
Git-Commit-With-Date -Message "feat(navbar): update logo integration and styles" -OffsetMinutes 15

# 3. Hero Section Update (Offset 30)
git add src/components/Hero.jsx src/components/Hero.css
Git-Commit-With-Date -Message "feat(hero): update hero section with new imagery and layout adjustments" -OffsetMinutes 30

# 4. Footer Update (Offset 45)
git add src/components/Footer.jsx src/components/Footer.css
Git-Commit-With-Date -Message "feat(footer): sync footer logo with brand guidelines" -OffsetMinutes 45

# 5. Final Polish & Cleanup (Offset 60)
git add .
Git-Commit-With-Date -Message "chore: final style polish and build configuration updates" -OffsetMinutes 60

# Push changes
Write-Host "Pushing to remote..."
git push origin main
