# SecuRecode: Detect, Fix & Secure

This repository contains a **secure version** of the original **vulnerable-code** repository. The following security issues were identified and fixed:

## 🔍 Security Issues Fixed:
### 1. **index.js**
- **Added Helmet.js** for security headers.
- **Used environment variables** instead of hardcoded port numbers.
- **Prepared for secure request handling**.

### 2. **Dockerfile**
- **Removed `--unsafe-perm`** from `npm install` to prevent privilege escalation.
- **Added a non-root user** to run the application securely.
- **Ensured minimal permissions** for security best practices.

## 🚀 How to Run the Secure Application

### 1️⃣ Install Dependencies:
```sh
npm install
```

### 2️⃣ Run the Application:
```sh
node index.js
```

or using Docker:
```sh
docker build -t secure-app .
docker run -p 3000:3000 secure-app
```

## 🔍 Automated Security Checks
A GitHub Actions workflow is included to scan for vulnerabilities in dependencies and Docker configurations.

---
**Stay secure!** 🔐🚀
