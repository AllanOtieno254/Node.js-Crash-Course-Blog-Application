# ================================
# MERN Stack Common Packages Setup
# ================================

# Initialize npm project (skip if already exists)
npm init -y

# Core backend
npm install express mongoose dotenv cors

# Authentication & security
npm install bcryptjs jsonwebtoken helmet express-session passport passport-jwt passport-local

# File uploads & utilities
npm install multer cloudinary uuid lodash axios dayjs

# Validation & error handling
npm install express-validator joi http-errors

# Logging & monitoring
npm install morgan winston chalk

# Realtime & performance
npm install socket.io redis rate-limiter-flexible

# Development dependencies
npm install --save-dev nodemon cross-env jest supertest concurrently

# ================================
# Global tools (run once per system)
# ================================
npm install -g pm2

Write-Host "✅ MERN stack packages installed successfully"


# How to use it (IMPORTANT)

# Save the file as:

# mern-packages.ps1


# Open PowerShell inside your project folder:

# cd "C:\Users\kevin\Documents\my projects\Nodejs-crash-course"


# Run it:

# powershell -ExecutionPolicy Bypass -File mern-packages.ps1

# 📁 What you’ll get after running it
# Nodejs-crash-course/
# ├── node_modules/
# ├── package.json
# ├── package-lock.json
# └── mern-packages.ps1

# 🧠 Pro tip (recommended package.json script)

# Add this after install:

# "scripts": {
#   "start": "node index.js",
#   "dev": "nodemon index.js"
# }


# Run:

# npm run dev


# If you want next, I can: