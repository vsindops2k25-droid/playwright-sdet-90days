# DAY 0 - PLAYWRIGHT SDET SETUP CHEAT SHEET

**Date:** August 14, 2026  
**Purpose:** Complete setup reference for 90-day Playwright SDET journey

---

## 📋 PRE-REQUISITES VERIFICATION

### Check Installed Tools

```powershell
# Check Node.js version
node --version
# Output: v24.14.1 ✅

# Check npm version
npm --version
# Output: 11.12.1 ✅

# Check Git version
git --version
# Output: git version 2.46.0.windows.1 ✅

# Check TypeScript version
tsc --version
# Output: Version 7.0.2 ✅

# Check VS Code version
code --version
# Output: 1.133.0 ✅

# Check Git configuration
git config user.name
git config user.email
# Output: (Company credentials - will change per project)
```

---

## 🏗️ PROJECT SETUP COMMANDS (Step-by-Step)

### Step 1: Create Project Folder

```powershell
# Navigate to user folder
cd C:\Users\vijayakumar.sinthu.THEELIXRLABS

# Create project folder
mkdir Playwright-SDET-90Days

# Enter the folder
cd Playwright-SDET-90Days

# Verify location
pwd
# Output: C:\Users\vijayakumar.sinthu.THEELIXRLABS\Playwright-SDET-90Days
```

---

### Step 2: Initialize Git Repository

```bash
# Initialize Git (creates .git folder)
git init
# Output: Initialized empty Git repository in .../.git/

# Set LOCAL git config (personal credentials for THIS project only)
git config user.name "Your Personal Name"
git config user.email "your.personal@gmail.com"

# Verify LOCAL config (this project)
git config user.name
git config user.email

# Verify GLOBAL config (all other projects - company email)
git config --global user.name
git config --global user.email
```

**Result:** Git tracking enabled, personal credentials set for this project only.

---

### Step 3: Create package.json

```bash
# Create package.json file
npm init -y
# Output: Wrote to package.json
```

**Created file:** `package.json`

**Contents:**
```json
{
  "name": "playwright-sdet-90days",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

---

### Step 4: Install Playwright Library

```bash
# Install Playwright as development dependency
npm install -D @playwright/test

# Alternative (same command):
npm install --save-dev @playwright/test
```

**What happens:**
- Downloads Playwright library (~10 MB)
- Creates `node_modules/` folder
- Creates `package-lock.json` file
- Updates `package.json` with dependency

**Output:**
```
added 3 packages, and audited 4 packages in 15s
found 0 vulnerabilities
```

---

### Step 5: Install Browsers

```bash
# Check what will be downloaded (preview mode)
npx playwright install --dry-run

# Install browsers (Chromium, Firefox, WebKit)
npx playwright install
```

**What happens:**
- Downloads 3 browsers (~300 MB)
- Saves to: `C:\Users\...\AppData\Local\ms-playwright\`
- One-time installation (shared across all projects)

**Output:**
```
Downloading Chromium 151.0... 
Downloading Firefox 153.0...
Downloading WebKit 26.5...
Done!
```

---

### Step 6: Verify Installation

```bash
# Check Playwright version
npx playwright --version
# Output: Version 1.47.2

# Check installed browsers
npx playwright install --dry-run
# Should show: already installed
```

---

## 📁 PROJECT FOLDER STRUCTURE (After Setup)

```
C:\Users\vijayakumar.sinthu.THEELIXRLABS\Playwright-SDET-90Days\
│
├── 📁 .git/                          (Git repository - NEVER edit manually)
│   ├── config                        (Local git settings)
│   ├── HEAD                          (Current branch pointer)
│   ├── objects/                      (All saved code versions)
│   ├── refs/                         (Branches)
│   └── logs/                         (Commit history)
│
├── 📁 node_modules/                  (Installed packages - DON'T commit to Git)
│   ├── @playwright/                  (Playwright test library)
│   │   └── test/
│   │       ├── index.js              (Main API)
│   │       ├── package.json          (Playwright's config)
│   │       └── lib/
│   ├── playwright-core/              (Browser automation engine)
│   ├── fsevents/                     (File system events)
│   ├── ws/                           (WebSocket library)
│   └── (100+ other sub-dependencies)
│
├── 📄 package.json                   (Project dependencies list - COMMIT)
├── 📄 package-lock.json              (Exact version lock - COMMIT)
└── 📄 DAY-0-SETUP-CHEATSHEET.md     (This file)
```

---

## 📂 FOLDER EXPLANATIONS

### `.git/` Folder

**Purpose:** Git's internal database  
**Size:** Grows with commits  
**Created by:** `git init`  
**Never:** Edit manually, delete (lose all history)  
**Commit to Git:** No (tracked automatically)  

**Key Files:**
- `config` - Your git settings (name, email)
- `objects/` - All your code snapshots
- `HEAD` - Points to current branch

---

### `node_modules/` Folder

**Purpose:** Stores ALL installed packages and dependencies  
**Size:** ~100-200 MB (for Playwright project)  
**Created by:** `npm install`  
**Can Delete:** Yes (run `npm install` to restore)  
**Commit to Git:** NO (add to .gitignore)  

**Key Subfolders:**
- `@playwright/test/` - Main Playwright library (what you import)
- `playwright-core/` - Browser automation engine (used internally)
- Other dependencies (utilities, helpers)

---

### `package.json` File

**Purpose:** Project blueprint - lists dependencies and metadata  
**Size:** ~1 KB  
**Created by:** `npm init -y`  
**Modified by:** `npm install` commands  
**Commit to Git:** YES (essential!)  

**Key Sections:**
```json
{
  "name": "playwright-sdet-90days",        // Project name
  "version": "1.0.0",                      // Project version
  "scripts": { ... },                      // Commands (npm test, npm run, etc.)
  "devDependencies": {                     // Development tools
    "@playwright/test": "^1.47.2"          // Playwright version
  }
}
```

---

### `package-lock.json` File

**Purpose:** Locks EXACT versions of ALL packages  
**Size:** ~50 KB  
**Created by:** First `npm install`  
**Modified by:** Every `npm install`  
**Commit to Git:** YES (ensures reproducibility)  

**Why Important:**
- Ensures everyone gets same exact versions
- Prevents "works on my machine" issues
- Includes sub-dependencies

---

## 🌍 GLOBAL INSTALLATIONS (System-Wide)

### Browser Storage Location

```
C:\Users\vijayakumar.sinthu.THEELIXRLABS\AppData\Local\ms-playwright\
├── chromium-1234\              (Chrome-like browser)
├── chromium_headless_shell-1234\
├── firefox-1538\               (Firefox browser)
├── webkit-2336\                (Safari-like browser)
├── ffmpeg-1011\                (Video recording)
└── winldd-1007\                (Windows dependencies)
```

**Size:** ~330 MB (current version)  
**Shared by:** ALL Playwright projects on this machine  
**Install Once:** Yes (per Playwright version)

---

## 🔧 COMMAND REFERENCE

### Git Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `git init` | Initialize repository | `git init` |
| `git config user.name "Name"` | Set author name (local) | `git config user.name "John"` |
| `git config user.email "email"` | Set author email (local) | `git config user.email "john@gmail.com"` |
| `git config --global user.email` | Check global config | Shows company email |
| `git status` | Check repository status | `git status` |
| `git add .` | Stage all changes | `git add .` |
| `git commit -m "msg"` | Save changes | `git commit -m "Initial commit"` |

---

### npm Commands

| Command | Purpose | Result |
|---------|---------|--------|
| `npm init -y` | Create package.json | Generates default config |
| `npm install` | Install all dependencies | Reads package.json, installs |
| `npm install <package>` | Install package | Adds to dependencies |
| `npm install -D <package>` | Install dev dependency | Adds to devDependencies |
| `npm list` | Show installed packages | Tree view |
| `npm outdated` | Check for updates | Shows new versions |

---

### npx Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npx playwright install` | Download browsers | Once per Playwright version |
| `npx playwright install --dry-run` | Preview what will download | Before installing |
| `npx playwright test` | Run all tests | After writing tests |
| `npx playwright test --headed` | Run with browser UI | Debugging |
| `npx playwright codegen <url>` | Generate test code | Record actions |
| `npx playwright show-report` | Open HTML report | After test run |

---

## 📊 INSTALLATION SIZES

| Component | Size | Location | Frequency |
|-----------|------|----------|-----------|
| Node.js | ~50 MB | C:\Program Files\nodejs\ | Once (global) |
| TypeScript | ~10 MB | Global npm packages | Once (global) |
| Playwright library | ~10 MB | node_modules/ | Per project |
| Browsers (all 3) | ~330 MB | AppData\Local\ms-playwright\ | Once per version |
| **Total (new project)** | **~10 MB** | | If browsers already installed |
| **Total (first time)** | **~400 MB** | | Node + Playwright + browsers |

---

## 🔄 WORKFLOW SUMMARY

### Creating New Project (This Setup)

1. Create folder → `mkdir Playwright-SDET-90Days`
2. Initialize Git → `git init`
3. Set Git config → `git config user.name/email`
4. Create package.json → `npm init -y`
5. Install Playwright → `npm install -D @playwright/test`
6. Install browsers → `npx playwright install` (if not already)

---

### Cloning Existing Project (Future)

1. Clone repository → `git clone <url>`
2. Enter folder → `cd project`
3. Install dependencies → `npm install` (reads package.json)
4. Install browsers → `npx playwright install` (if needed)
5. Run tests → `npx playwright test`

---

## 🎯 WHAT EACH TOOL DOES

### Node.js
- **What:** JavaScript runtime (runs JS outside browser)
- **Why:** Required to run Playwright (written in JavaScript)
- **Includes:** npm (package manager)

### npm (Node Package Manager)
- **What:** Package installer and manager
- **Why:** Downloads and manages Playwright and dependencies
- **Commands:** `npm install`, `npm init`, etc.

### npx (Node Package eXecute)
- **What:** Command executor from packages
- **Why:** Runs Playwright commands without global install
- **Commands:** `npx playwright test`, etc.

### Git
- **What:** Version control system
- **Why:** Track changes, collaborate, backup code
- **Commands:** `git commit`, `git push`, etc.

### TypeScript
- **What:** JavaScript with types (type-safe)
- **Why:** Better code quality, fewer bugs
- **Already installed:** Global (v7.0.2)

### Playwright
- **What:** Browser automation library
- **Why:** Write and run automated tests
- **Components:** Library (code) + Browsers (binaries)

---

## ⚠️ IMPORTANT RULES

### NEVER Do This:

❌ Edit files inside `node_modules/` manually  
❌ Edit `.git/` folder manually  
❌ Delete `package.json` or `package-lock.json`  
❌ Commit `node_modules/` to Git  
❌ Use company email in personal projects  

### ALWAYS Do This:

✅ Commit `package.json` and `package-lock.json`  
✅ Use `.gitignore` to exclude `node_modules/`  
✅ Set local Git config for personal projects  
✅ Run `npm install` after cloning projects  
✅ Keep Playwright browsers updated  

---

## 🆘 TROUBLESHOOTING

### Problem: `npm install` does nothing

**Cause:** No dependencies in package.json  
**Solution:** Specify package name: `npm install -D @playwright/test`

---

### Problem: `git config` shows company email

**Cause:** Using global config instead of local  
**Solution:** Set local: `git config user.email "personal@gmail.com"` (no `--global`)

---

### Problem: Browsers not found

**Cause:** Browsers not installed or wrong version  
**Solution:** Run `npx playwright install`

---

### Problem: Command not found

**Cause:** Not in project folder or package not installed  
**Solution:** 
1. Check location: `pwd`
2. Check installation: `npm list @playwright/test`

---

## 📚 KEY CONCEPTS

### Development Dependency (-D flag)

**Regular dependency:**
```bash
npm install express
```
Used in production (app needs it to run)

**Development dependency:**
```bash
npm install -D @playwright/test
```
Used only for development/testing (not in production)

---

### Local vs Global Git Config

**Global (all projects):**
```bash
git config --global user.email "work@company.com"
```

**Local (this project only):**
```bash
git config user.email "personal@gmail.com"
```

Local overrides global for that project.

---

### npm vs npx

**npm = Install**
```bash
npm install -D @playwright/test
```

**npx = Execute**
```bash
npx playwright test
```

npx runs commands from `node_modules/.bin/`

---

## 🎓 NEXT STEPS

**Day 1 Preview:**
- Create first test file
- Learn variables in JS/TS/Playwright
- Write 5 basic programs
- Commit to Git

**Setup Complete Checklist:**
- ✅ Project folder created
- ✅ Git initialized
- ✅ Personal Git config set
- ✅ package.json created
- ✅ Playwright installed
- ✅ Browsers installed
- ✅ Ready to code!

---

## 📝 QUICK REFERENCE

**Most Used Commands (Copy-Paste Ready):**

```bash
# Navigate to project
cd C:\Users\vijayakumar.sinthu.THEELIXRLABS\Playwright-SDET-90Days

# Check status
git status
npm list

# Run tests (future)
npx playwright test

# Open report (future)
npx playwright show-report

# Generate test code (future)
npx playwright codegen https://example.com
```

---

**End of Day 0 Setup Cheat Sheet**  
**Ready for Day 1!** 🚀
