# 🚀 KHOA DOAN — BACKEND SOFTWARE ENGINEER PORTFOLIO

A high-performance, dark-mode, minimalist one-page personal branding website specifically crafted for a **Java / Spring Boot Backend Engineer**.

Designed to showcase **system architecture competencies, microservices mastery, and engineering discipline** for international recruiters, remote employers, and freelance clients.

---

## 🌟 Key Features

- **Dark Mode & Minimalist Aesthetics:** Tailored for software engineers with deep slate backgrounds, glowing accents (`#10b981`, `#38bdf8`), and crisp typography (`Inter` & `JetBrains Mono`).
- **Hero Section:** Live `Open to Work` beacon, punchy value proposition, resume download button, and 1-click email copy.
- **Enterprise Internship Showcase:** 6-month intensive backend experience highlighting Spring Boot, SePay payment webhooks, and agile engineering workflows.
- **Technical Skills:** Categorized skill badges across Backend, Databases & Caching (PostgreSQL, Redis), System Design, and DevOps (Docker Compose).
- **Featured Projects:**
  - **JobRadar:** Distributed Microservices Platform (Spring Cloud Gateway, Auth Service, Job Service, Crawler, Notification, SePay Payment Service).
  - **TaskFlow:** Enterprise Agile Kanban API with optimistic concurrency control and RBAC.
  - **Redis Caching & Rate Limiter:** High-throughput performance engineering.
- **Interactive Architecture Inspector:** Built-in modal demonstrating microservices data ingestion topology.
- **Coursera Verified Certifications:** Credential verification cards demonstrating disciplined continuous learning.
- **Serverless Contact Form:** Pre-wired with Web3Forms (no backend server required; direct delivery to your inbox).

---

## 📂 Project Structure

```
K:\Project\portfolio\
├── index.html              # Main HTML5 structure with Tailwind CSS & Lucide icons
├── assets\
│   ├── css\
│   │   └── style.css       # Custom dark glow effects, scrollbar, glassmorphism
│   ├── js\
│   │   └── main.js         # Nav tracking, 1-click copy, modal, Web3Forms dispatcher
│   ├── images\
│   │   └── avatar.jpg      # Drop your photo here (avatar.svg used as fallback)
│   └── docs\               # Put your CV_DOAN_CONG_KHOA.pdf here
├── package.json            # Vite scripts (npm run dev, npm run build)
└── README.md               # Quick setup and deployment guide
```

---

## ⚡ How to Run & Preview Locally

You have multiple options:

### Option 1: Standard Developer Mode (Hot Reload) 🔥
Open PowerShell in this directory and run:
```powershell
npm run dev
```
Then visit `http://localhost:5173`. When you edit code, the browser updates automatically!

### Option 2: Double-Click (Zero Install)
Simply double-click `index.html` in your file explorer to open it in Chrome / Edge.

### Option 3: Production Build
```powershell
npm run build
```
Creates an ultra-optimized bundle in the `dist/` directory ready for any web host.

---

## ✉️ Setting Up the Contact Form (30 Seconds)

The form uses **Web3Forms**, which is 100% free and requires **zero server maintenance**:

1. Go to [https://web3forms.com](https://web3forms.com).
2. Enter your email (`doanthilong@gmail.com`) and click **"Create Access Key"**.
3. Check your email for your Access Key (a UUID string like `a1b2c3d4-...`).
4. Open `index.html` and replace line 431:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
   with your actual key:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
   ```
5. Done! Any message submitted on the site will instantly arrive in your Gmail inbox!

---

## 🌐 How to Deploy for Free

### Method A: Deploy to GitHub Pages (Recommended)
1. Create a new repository on GitHub named:
   ```
   khoadoan2008.github.io
   ```
2. Push the files in this folder to the `main` branch:
   ```powershell
   git init
   git add .
   git commit -m "feat: launch personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/khoadoan2008/khoadoan2008.github.io.git
   git push -u origin main
   ```
3. Your site is immediately live at:
   👉 **`https://khoadoan2008.github.io`**

### Method B: Deploy to Vercel (1-Click)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select your portfolio repository.
3. Click **"Deploy"**.

---

## 🔗 Connecting Your Free `is-a.dev` Custom Domain

You already have the full step-by-step tutorial in:
`K:\Project\HUONG_DAN_DANG_KY_DOMAIN_IS_A_DEV.md`

Once you deploy to GitHub Pages or Vercel, simply register:
👉 **`https://khoadoan.is-a.dev`**
to make your developer profile look world-class!
