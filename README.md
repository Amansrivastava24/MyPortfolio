# Premium React Portfolio

A production-ready, fully animated developer portfolio built with React 19 and Vite. Dark-mode by default, glassmorphism UI, and Framer Motion throughout.

![Tech Stack](https://img.shields.io/badge/stack-React-2563EB) ![License](https://img.shields.io/badge/license-MIT-9333EA)

---

## ✨ Features

- **Design** — Dark, glassmorphic UI inspired by modern design trends, built with Tailwind CSS
- **Animation** — Framer Motion: hero role-changer, magnetic buttons, cursor glow, scroll reveals, animated counters, page transitions
- **Pages** — Home, About, Skills, Projects, Project Details, Contact, 404
- **Content management** — Zero hardcoded content; everything lives in `src/data/*`
- **Deploy-Ready** — Simplified frontend-only architecture optimized for Vercel, Netlify, or GitHub Pages

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion, React Router DOM, React Icons |

---

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── ui/          # Loader, GlassCard, Buttons...
│   │   ├── sections/    # Hero, ProjectCard, SkillCard...
│   ├── pages/           # Route-level pages
│   ├── layouts/         # MainLayout, PageTransition
│   ├── hooks/           # useCountUp, useMousePosition
│   ├── styles/          # index.css (Tailwind + custom utilities)
│   ├── utils/
│   └── data/            # ⭐ ALL portfolio content lives here
├── public/              # static assets (resume, images)
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Your portfolio will be live at `http://localhost:5173`.

### 3. Edit your content

Everything shown on the site (name, bio, projects, skills, achievements) is defined in **`src/data/`** — edit those files to make the portfolio yours. No hardcoded content in components.


