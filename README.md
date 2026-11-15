# Sujal Patel — Personal Developer Portfolio

![Theme](https://img.shields.io/badge/Design_System-Neuform_Dark-2B44D1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Final_Year_Diploma_IT-435EF0?style=for-the-badge)
![Responsiveness](https://img.shields.io/badge/Responsive-Mobile_%7C_Tablet_%7C_Desktop-10B981?style=for-the-badge)

A modern, interactive, and responsive personal portfolio website designed for **Sujal Patel**, a final-year Diploma in Information Technology student. Engineered following the **Interactive Hero / Neuform Design System** specifications, featuring dynamic canvas physics, dark-mode blue accents, modular data management, and accessible navigation.

---

## 🌟 Highlights & Features

### 1. Interactive Hero Experience
- **Interactive Particle Constellation**: Responsive HTML5 Canvas with real-time cursor physics (repulsion, attraction, dynamic glow, and connecting constellation lines).
- **Desktop Cursor Spotlight**: Radial ambient glow tracking pointer movement across the viewport.
- **Engaging Tagline**: *"Don't just scroll. Explore my work."*
- **Action CTAs**: Instant smooth-scrolling to Projects and Contact sections.

### 2. Neuform Dark Visual Design
- **Exact Color Palette**:
  - Main Background: `#050510`
  - Cards & Surfaces: `#161F45` (with glassmorphism and subtle inner highlights)
  - Primary Accent: `#2B44D1`
  - Interactive Accent: `#435EF0`
  - Text Primary: `#FFFFFF`
  - Text Secondary: `#A1A1AA`
  - Borders: `#27272A`
- **Typography**: Inter (Headers & Body) & JetBrains Mono (Technical badges, tags, and timestamps).
- **Interactive 3D Card Hover**: Subtle 3D perspective tilt on hover on desktop devices.

### 3. Modular Architecture & Easy Updates
- **Skills (`js/data/skills.js`)**: Add, modify, or reorder technical skills and categories without editing HTML.
- **Projects (`js/data/projects.js`)**: Update project titles, descriptions, live demos, and GitHub repositories with simple JavaScript object entries.
- **Category Filter Tabs**: Instant filtering by Web Development, Python & Backend, and Tools & Utilities.

### 4. Direct Communication & Contact Form
- **One-Click Copy**: Instant click-to-copy for Phone (`9328373321`) and Email (`sujalchaudhary271@gmail.com`) with toast notification feedback.
- **Client-Side Validation**: Real-time validation for required fields, email format, and message length with clear inline alerts.
- **Submission Feedback**: Loading spinner and success notifications.

---

## 📁 Project Architecture

```
my portfolio/
├── index.html                   # Semantic HTML5, SEO & OpenGraph metadata
├── css/
│   └── styles.css               # Neuform dark theme, CSS variables, responsive rules
├── js/
│   ├── data/
│   │   ├── skills.js            # Modular skills data
│   │   └── projects.js          # Modular projects data
│   ├── components/
│   │   ├── hero-canvas.js       # Interactive particle canvas controller
│   │   ├── navigation.js        # Sticky navbar & mobile drawer controller
│   │   └── contact-form.js      # Form validation & clipboard utilities
│   └── main.js                  # Application initialization & animations
├── assets/
│   ├── images/                  # Project imagery & screenshots
│   └── icons/                   # Custom icons & badges
├── .gitignore                   # Git ignore specifications
└── README.md                    # Project documentation
```

---

## 🚀 How to Run Locally

You can run this portfolio in any browser directly or using a lightweight HTTP server:

### Option 1: Direct in Browser
Double-click `index.html` or open it with your favorite browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Using Python (Recommended for local dev)
Run the following in PowerShell or Terminal inside this folder:
```powershell
python -m http.server 8000
```
Then open your browser at:
```
http://localhost:8000
```

### Option 3: Using VS Code Live Server
1. Open this folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages (Free)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Sujal Patel interactive portfolio"
   git remote add origin https://github.com/sujalpatel2728/sujalportfolio.git
   git branch -M main
   git push -u origin main
   ```
2. In your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select **Branch**: `main`, Folder: `/ (root)`, and click **Save**.
3. Your portfolio will be live at `https://sujalpatel2728.github.io/sujalportfolio/` within minutes!

### Deploy to Vercel or Netlify
- **Vercel**: Import your GitHub repository into Vercel and click **Deploy**. No build command is required.
- **Netlify**: Drag and drop the folder into Netlify Drop, or connect the repository.

---

## 👤 Personal Information & Contact

- **Developer**: Sujal Patel
- **Education**: Diploma in Information Technology (Final Year Student)
- **Phone**: [+91 9328373321](tel:+919328373321)
- **Email**: [sujalchaudhary271@gmail.com](mailto:sujalchaudhary271@gmail.com)
- **GitHub**: [github.com/sujalpatel2728](https://github.com/sujalpatel2728)

---

© 2026 Sujal Patel. All rights reserved.
