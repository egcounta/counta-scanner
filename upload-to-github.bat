@echo off
echo ========================================
echo رفع الموقع على GitHub
echo Uploading website to GitHub
echo ========================================
echo.

REM التحقق من وجود git
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in PATH
    echo [ERROR] يرجى تثبيت Git أولاً
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [1/7] التحقق من حالة Git...
echo [1/7] Checking Git status...
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo [2/7] تهيئة Git Repository...
    echo [2/7] Initializing Git repository...
    git init
)

echo [3/7] إضافة Remote Repository...
echo [3/7] Adding remote repository...
git remote remove origin >nul 2>&1
git remote add origin git@github.com:egcounta/counta-scanner.git
if %errorlevel% neq 0 (
    echo [WARNING] Failed to add remote, trying to set URL...
    git remote set-url origin git@github.com:egcounta/counta-scanner.git
)

echo [4/7] إضافة جميع الملفات...
echo [4/7] Adding all files...
git add .

echo [5/7] عمل Commit...
echo [5/7] Creating commit...
git commit -m "Update website: Add Windows download modal with Python, App, and Requirements sections" >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] No changes to commit or commit failed
)

echo [6/7] التحقق من الفرع...
echo [6/7] Checking branch...
git branch --show-current >nul 2>&1
if %errorlevel% neq 0 (
    git branch -M main
)

echo [7/7] رفع الملفات على GitHub...
echo [7/7] Pushing to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo [WARNING] Failed to push to main, trying master...
    git push -u origin master
)

echo.
echo ========================================
echo تم الانتهاء!
echo Done!
echo ========================================
pause

