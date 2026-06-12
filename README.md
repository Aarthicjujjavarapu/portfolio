# Aarthi J — AI/ML Engineer Portfolio

A modern, dark-themed portfolio website built with **React + Vite + Tailwind CSS**.
Designed for recruiters: clean SaaS / AI-startup feel, responsive, and fast.

## ✨ Features

- Dark theme with subtle gradients, glow accents, and glass cards
- Fully responsive (mobile → desktop)
- Reusable, data-driven components — edit content in `src/data/`, not markup
- Sections: Hero, About, Featured Projects, Skills, Experience Highlights, Contact
- Sticky navbar with mobile menu
- Deployable to Vercel with zero config

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

> Requires Node.js 18+.

## 📁 File structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            # ← replace with your real resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   ├── site.js           # name, email, links (LinkedIn placeholder here)
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Tailwind + custom component classes
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## ✏️ Customize

All content lives in `src/data/` so you rarely touch the components:

- **`site.js`** — your name, email, location, GitHub, **LinkedIn (placeholder — update this!)**, and resume path.
- **`projects.js`** — featured projects (title, description, tech, links).
- **`skills.js`** — skill groups.
- **`experience.js`** — "Experience Highlights" cards.

**Resume:** drop your PDF at `public/resume.pdf` (a placeholder is already there). The Hero and Navbar "Download Resume" buttons link to `/resume.pdf`.

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Done.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## 🛠 Tech

React 18 · Vite 5 · Tailwind CSS 3 · lucide-react (icons)
