# Premium MERN Stack Portfolio

A production-ready, fully animated developer portfolio built with React 19, Node.js, Express, and MongoDB. Dark-mode by default, glassmorphism UI, Framer Motion throughout, and a JWT-protected admin dashboard for managing content.

![Tech Stack](https://img.shields.io/badge/stack-MERN-2563EB) ![License](https://img.shields.io/badge/license-MIT-9333EA)

---

## ✨ Features

- **Design** — Dark, glassmorphic UI inspired by Apple / Stripe / Vercel / Linear, built with Tailwind CSS
- **Animation** — Framer Motion: hero role-changer, magnetic buttons, cursor glow, scroll reveals, animated counters, page transitions, scroll progress bar, loading screen
- **9 pages** — Home, About, Skills, Experience, Projects (search + filter + pagination), Project Details, Achievements, Certifications, Education, Contact, 404
- **Backend** — Express REST API with MongoDB/Mongoose, 8 collections, JWT admin auth, Cloudinary image uploads, Nodemailer contact form
- **Admin dashboard** — Protected login, message inbox (fully wired), extensible CRUD pattern for all other resources
- **Content management** — Zero hardcoded content; everything lives in `client/src/data/*`
- **Production concerns** — Rate limiting, Helmet, CORS, centralized error handling, SEO meta tags, `robots.txt`, `sitemap.xml`, Docker support

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion, React Router DOM, Axios, React Icons |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas + Mongoose |
| Auth | JWT + bcryptjs (admin only) |
| Media | Cloudinary + Multer |
| Email | Nodemailer |

---

## 📁 Project Structure

```
portfolio/
├── client/                  # React frontend
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   ├── ui/          # Loader, GlassCard, Buttons, ScrollProgress...
│   │   │   ├── sections/    # Hero, ProjectCard, SkillCard, ContactForm...
│   │   │   └── animations/
│   │   ├── pages/           # Route-level pages + admin/
│   │   ├── layouts/         # MainLayout, PageTransition
│   │   ├── hooks/           # useCountUp, useScrollProgress, useMousePosition
│   │   ├── context/         # AuthContext
│   │   ├── services/        # axios instance + API calls
│   │   ├── constants/
│   │   ├── styles/          # index.css (Tailwind + custom utilities)
│   │   ├── utils/
│   │   └── data/            # ⭐ ALL portfolio content lives here
│   └── public/
└── server/                  # Express backend
    ├── config/              # db.js, cloudinary.js
    ├── controllers/         # incl. crudFactory.js for DRY CRUD
    ├── middleware/          # auth, upload, error handling, rate limiting
    ├── models/               # 8 Mongoose schemas
    ├── routes/
    ├── utils/               # email, cloudinary upload, seedData
    └── uploads/
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB Atlas cluster (or local MongoDB)
- A Cloudinary account (for image uploads)
- An SMTP account for Nodemailer (Gmail App Password works well)

### 1. Clone & install

```bash
cd server && npm install
cd ../client && npm install
```

### 2. Configure environment variables

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Fill in `server/.env` with your MongoDB URI, JWT secret, Cloudinary keys, and SMTP credentials.

### 3. Seed the admin account

```bash
cd server
npm run seed
```

This creates one admin account using `ADMIN_EMAIL` / `ADMIN_PASSWORD` from your `.env`.

### 4. Run in development

```bash
# terminal 1
cd server && npm run dev

# terminal 2
cd client && npm run dev
```

Frontend: `http://localhost:5173` · Backend: `http://localhost:5000/api`

### 5. Edit your content

Everything shown on the public site (name, bio, projects, skills, experience, education, achievements, certificates, social links) is defined in **`client/src/data/`** — edit those files to make the portfolio yours. No hardcoded content in components.

> The backend API + admin dashboard are provided so you can move this content into MongoDB and manage it dynamically instead — the data files are the fastest path to a working site; the API is there when you want a real CMS.

---

## 🔌 API Overview

| Method | Endpoint | Access |
|---|---|---|
| POST | `/api/auth/login` | Public |
| GET | `/api/auth/me` | Private |
| GET | `/api/projects` | Public (search, category, page, limit query params) |
| GET | `/api/projects/:slug` | Public |
| POST/PUT/DELETE | `/api/projects` | Private |
| GET/POST/PUT/DELETE | `/api/skills` | Public read / Private write |
| GET/POST/PUT/DELETE | `/api/experience` | Public read / Private write |
| GET/POST/PUT/DELETE | `/api/education` | Public read / Private write |
| GET/POST/PUT/DELETE | `/api/achievements` | Public read / Private write |
| GET/POST/PUT/DELETE | `/api/certificates` | Public read / Private write |
| POST | `/api/messages` | Public (rate-limited contact form) |
| GET/PATCH/DELETE | `/api/messages` | Private |

All private routes require `Authorization: Bearer <token>`.

---

## 🐳 Docker

```bash
docker-compose up --build
```

This starts the client (Nginx, port 3000), server (port 5000), and a local MongoDB instance. For production, point `MONGO_URI` at MongoDB Atlas instead of the bundled Mongo container and remove the `mongo` service.

---

## ☁️ Deployment Guide

**Frontend → Vercel**
1. Import the `client/` directory as a Vercel project (framework preset: Vite)
2. Set `VITE_API_BASE_URL` to your deployed backend URL
3. Deploy

**Backend → Render**
1. Create a new Web Service pointing at `server/`
2. Build command: `npm install` · Start command: `npm start`
3. Add all variables from `.env.example` in Render's environment settings
4. Set `CLIENT_URL` to your Vercel domain (for CORS)

**Database → MongoDB Atlas**
1. Create a free M0 cluster
2. Add your Render service's outbound IP (or `0.0.0.0/0` for simplicity) to Network Access
3. Create a database user and copy the connection string into `MONGO_URI`

**Images → Cloudinary**
1. Create a free account, grab your cloud name / API key / API secret from the dashboard
2. Add them to `server/.env`

---

## 🧠 Notes on the Admin Dashboard

The **Messages** panel is fully wired end-to-end (list, mark as read, delete) and is meant as the reference implementation. The other five resource panels (Projects, Skills, Experience, Education, Achievements, Certificates) are scaffolded with the same layout and ready to be wired to their respective `/api/<resource>` endpoints using the identical fetch → render → mutate pattern — the backend CRUD for all of them is already complete.

---

## 📄 License

MIT — use this freely for your own portfolio.
