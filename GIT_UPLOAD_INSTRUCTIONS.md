# تعليمات رفع الموقع على GitHub

## الخطوات:

### 1. التأكد من تثبيت Git
إذا لم يكن Git مثبتاً، قم بتحميله من: https://git-scm.com/download/win

### 2. فتح Terminal في مجلد website
```bash
cd website
```

### 3. تهيئة Git Repository (إذا لم يكن موجوداً)
```bash
git init
```

### 4. إضافة Remote Repository
```bash
git remote add origin git@github.com:egcounta/counta-scanner.git
```

أو إذا كان موجوداً بالفعل:
```bash
git remote set-url origin git@github.com:egcounta/counta-scanner.git
```

### 5. إضافة جميع الملفات
```bash
git add .
```

### 6. عمل Commit
```bash
git commit -m "Update website: Add Windows download modal with Python, App, and Requirements sections"
```

### 7. رفع الملفات على GitHub
```bash
git push -u origin main
```

أو إذا كان الفرع اسمه master:
```bash
git push -u origin master
```

## ملاحظات:
- تأكد من أن SSH key مضاف إلى GitHub
- إذا واجهت مشكلة في SSH، يمكنك استخدام HTTPS:
  ```bash
  git remote set-url origin https://github.com/egcounta/counta-scanner.git
  ```

