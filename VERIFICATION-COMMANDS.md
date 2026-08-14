# PLAYWRIGHT SDET - VERIFICATION COMMANDS

**Purpose:** Quick reference to verify your setup after installation  
**Use when:** After setup, after cloning project, troubleshooting issues

---

## 🎯 QUICK VERIFICATION (Copy-Paste All)

### For PowerShell:

```powershell
# Navigate to project folder
cd C:\Users\vijayakumar.sinthu.THEELIXRLABS\Playwright-SDET-90Days

# Verify location
pwd

# Check Node.js
node --version

# Check npm
npm --version

# Check Git
git --version

# Check TypeScript
tsc --version

# Check Playwright
npx playwright --version

# Check Git config (local)
git config user.name
git config user.email

# Check if package.json exists
Test-Path package.json

# Check if node_modules exists
Test-Path node_modules

# List project files
Get-ChildItem

# Check installed browsers
Get-ChildItem C:\Users\vijayakumar.sinthu.THEELIXRLABS\AppData\Local\ms-playwright
```

---

### For Git Bash:

```bash
# Navigate to project folder
cd /c/Users/vijayakumar.sinthu.THEELIXRLABS/Playwright-SDET-90Days

# Verify location
pwd

# Check Node.js
node --version

# Check npm
npm --version

# Check Git
git --version

# Check TypeScript
tsc --version

# Check Playwright
npx playwright --version

# Check Git config (local)
git config user.name
git config user.email

# Check if package.json exists
ls -la package.json

# Check if node_modules exists
ls -la node_modules

# List all project files
ls -la

# Check installed browsers
ls -la /c/Users/vijayakumar.sinthu.THEELIXRLABS/AppData/Local/ms-playwright
```

---

## 📋 DETAILED VERIFICATION (Step-by-Step)

### 1. System Tools

```bash
# Node.js (should show v24.14.1 or higher)
node --version
# Expected: v24.14.1 ✅

# npm (should show 11.12.1 or higher)
npm --version
# Expected: 11.12.1 ✅

# Git (should show 2.46.0 or higher)
git --version
# Expected: git version 2.46.0.windows.1 ✅

# TypeScript (should show 7.0.2 or higher)
tsc --version
# Expected: Version 7.0.2 ✅
```

---

### 2. Project Location

```bash
# PowerShell
pwd

# Git Bash
pwd

# Expected output:
# C:\Users\vijayakumar.sinthu.THEELIXRLABS\Playwright-SDET-90Days
# OR
# /c/Users/vijayakumar.sinthu.THEELIXRLABS/Playwright-SDET-90Days
```

---

### 3. Git Configuration

```bash
# Check local Git name (should be your personal name)
git config user.name
# Expected: Your Personal Name ✅

# Check local Git email (should be your personal email)
git config user.email
# Expected: your.personal@gmail.com ✅

# Check global Git email (should be company email)
git config --global user.email
# Expected: vijayakumar.sinthu@mobileheartbeat.com ✅

# These should be DIFFERENT (local ≠ global) ✅
```

---

### 4. Project Files

**PowerShell:**
```powershell
# Check package.json
Test-Path package.json
# Expected: True ✅

# Check package-lock.json
Test-Path package-lock.json
# Expected: True ✅

# Check node_modules folder
Test-Path node_modules
# Expected: True ✅

# Check .git folder
Test-Path .git
# Expected: True ✅
```

**Git Bash:**
```bash
# Check package.json
ls package.json
# Expected: package.json ✅

# Check package-lock.json
ls package-lock.json
# Expected: package-lock.json ✅

# Check node_modules folder
ls -d node_modules
# Expected: node_modules/ ✅

# Check .git folder
ls -d .git
# Expected: .git/ ✅
```

---

### 5. Playwright Installation

```bash
# Check Playwright version
npx playwright --version
# Expected: Version 1.47.x ✅

# Check if Playwright is in node_modules
# PowerShell:
Test-Path node_modules/@playwright/test

# Git Bash:
ls node_modules/@playwright/test

# Expected: True (PowerShell) or folder path (Git Bash) ✅
```

---

### 6. Installed Browsers

**PowerShell:**
```powershell
# List all browsers
Get-ChildItem C:\Users\vijayakumar.sinthu.THEELIXRLABS\AppData\Local\ms-playwright | Select-Object Name

# Filter only browser folders
Get-ChildItem C:\Users\vijayakumar.sinthu.THEELIXRLABS\AppData\Local\ms-playwright | Where-Object { $_.Name -like "chromium-*" -or $_.Name -like "firefox-*" -or $_.Name -like "webkit-*" } | Select-Object Name
```

**Git Bash:**
```bash
# List all browsers
ls /c/Users/vijayakumar.sinthu.THEELIXRLABS/AppData/Local/ms-playwright

# Filter only browser folders
ls /c/Users/vijayakumar.sinthu.THEELIXRLABS/AppData/Local/ms-playwright | grep -E "chromium|firefox|webkit"
```

**Expected output:**
```
chromium-1234
firefox-1538
webkit-2336
(plus old versions if you kept them)
```

---

### 7. Playwright Dry Run

```bash
# Check what browsers Playwright expects
npx playwright install --dry-run

# If already installed, should show:
# Chromium ... is already installed
# Firefox ... is already installed
# WebKit ... is already installed
```

---

## ✅ EXPECTED RESULTS SUMMARY

| Check | Expected Result |
|-------|----------------|
| **Node.js** | v24.14.1 or higher |
| **npm** | 11.12.1 or higher |
| **Git** | 2.46.0 or higher |
| **TypeScript** | 7.0.2 or higher |
| **Playwright** | 1.47.x |
| **Local Git email** | Your personal email |
| **Global Git email** | Company email (different from local) |
| **package.json** | Exists ✅ |
| **package-lock.json** | Exists ✅ |
| **node_modules/** | Exists ✅ |
| **.git/** | Exists ✅ |
| **Chromium** | Installed in AppData\Local\ms-playwright |
| **Firefox** | Installed in AppData\Local\ms-playwright |
| **WebKit** | Installed in AppData\Local\ms-playwright |

---

## 🔍 DETAILED PACKAGE CHECK

```bash
# List all installed npm packages in project
npm list

# Expected output:
playwright-sdet-90days@1.0.0
└── @playwright/test@1.47.x

# Check for outdated packages
npm outdated

# Check for vulnerabilities
npm audit
```

---

## 📊 PROJECT STRUCTURE VERIFICATION

**PowerShell:**
```powershell
Get-ChildItem -Force | Select-Object Mode, Name
```

**Git Bash:**
```bash
ls -la
```

**Expected output:**
```
.git/                       (Git repository)
node_modules/               (Installed packages)
DAY-0-SETUP-CHEATSHEET.md  (Setup guide)
VERIFICATION-COMMANDS.md   (This file)
package.json               (Project config)
package-lock.json          (Version lock)
```

---

## 🧪 FIRST TEST RUN (Optional - After Day 1)

```bash
# Create a simple test file first (do this in Day 1)
# Then run:

npx playwright test

# Should run tests (or show "no tests found" if none created yet)
```

---

## 🆘 TROUBLESHOOTING CHECKS

### If `node` command not found:

```bash
# Check if Node.js is in PATH
# PowerShell:
$env:PATH -split ';' | Select-String -Pattern "nodejs"

# Git Bash:
echo $PATH | grep -i node
```

---

### If `npx` command not found:

```bash
# Check npm installation
npm --version

# If npm works but npx doesn't, reinstall npm
npm install -g npm@latest
```

---

### If Playwright not found:

```bash
# Check if @playwright/test is installed
npm list @playwright/test

# If not installed, install it
npm install -D @playwright/test
```

---

### If browsers missing:

```bash
# Install browsers
npx playwright install

# Or install specific browser only
npx playwright install chromium
```

---

### If Git config shows wrong email:

```bash
# Make sure you're setting LOCAL config (no --global flag)
git config user.email "your.personal@gmail.com"

# Verify
git config user.email  # Should show personal
git config --global user.email  # Should show company
```

---

## 📝 VERIFICATION CHECKLIST

**Before starting Day 1, ensure:**

- [ ] Node.js version shows correctly
- [ ] npm version shows correctly
- [ ] Git version shows correctly
- [ ] TypeScript version shows correctly
- [ ] Playwright version shows correctly
- [ ] Local Git config has personal email
- [ ] Global Git config still has company email
- [ ] package.json exists
- [ ] package-lock.json exists
- [ ] node_modules/ folder exists
- [ ] .git/ folder exists
- [ ] Chromium browser installed
- [ ] Firefox browser installed
- [ ] WebKit browser installed
- [ ] `npm list` shows @playwright/test
- [ ] No vulnerabilities in `npm audit`

**If all checked ✅ → You're ready for Day 1!** 🚀

---

## 🔄 RE-VERIFICATION COMMANDS

**Use these after:**
- Restarting your computer
- Cloning project on new machine
- Updating Playwright version
- Troubleshooting issues

```bash
# Quick health check
node --version && npm --version && npx playwright --version

# Full verification
npm install && npx playwright install --dry-run
```

---

## 💾 SAVE THIS FILE

**Location:** `Playwright-SDET-90Days/VERIFICATION-COMMANDS.md`

**Bookmark for:**
- Daily health checks
- After system updates
- Troubleshooting sessions
- Teaching others

---

**End of Verification Commands** ✅
