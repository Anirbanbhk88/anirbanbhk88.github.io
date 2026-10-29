# Anirban Bhowmick — Portfolio

Personal portfolio and blog of **Anirban Bhowmick**, AI Engineer (LLMs, RAG systems, data pipelines) and Research Engineer at Fraunhofer IAIS.

**Live site:** [https://anirbanbhk88.github.io/](https://anirbanbhk88.github.io/)

## 📖 About

This repository powers [anirbanbhk88.github.io](https://anirbanbhk88.github.io/) — a single-scroll portfolio with an integrated blog. The Experience and Research & Publications sections are kept in sync with Anirban's CV, so what you read on the site always matches the downloadable PDF. Anirban builds LLM applications, RAG systems, and data pipelines, and currently works as a Research Engineer at [Fraunhofer IAIS](https://www.iais.fraunhofer.de/).

## ✨ Features

- Single-scroll, fully responsive portfolio (Hero, About, Experience, Research & Publications, Skills, Projects, Blog teaser, Contact)
- Persisted dark mode with a pre-paint script — no flash of unstyled content (FOUC)
- CV-synced Experience (8 roles) and Research & Publications (KONVENS 2021, ICON 2021) sections
- Self-hosted CV PDF, served from the site and linked via the hero's "Download CV" button
- Auto-discovery blog pipeline: drop an HTML file into `public/posts/` and it's published on the next push
- Blog index automatically grouped by year
- Automatic build and deploy to GitHub Pages on every push to `master`
- Accessible by default: skip link, visible focus rings, reduced-motion support

## 🛠 Tech Stack

| Layer        | Technology                                              |
| ------------ | ------------------------------------------------------- |
| Framework    | Next.js 13 (pages router) + React 18                    |
| Styling      | Tailwind CSS 3 with custom design tokens (indigo/violet) |
| Typography   | `next/font` — Inter & Sora                              |
| Blog engine  | Custom Node build script + JSON manifest (zero dependencies) |
| Hosting      | GitHub Pages                                            |
| CI/CD        | GitHub Actions                                          |

## 📁 Project Structure

```
.
├── .github/workflows/deploy.yml   # Build + deploy workflow (push to master)
└── next-portfolio/                # The Next.js app
    ├── components/                # Reusable UI components
    ├── data/                      # Generated posts.json + site data
    ├── pages/                     # Pages (home, /blog/)
    ├── public/                    # Static assets, CV PDF, blog posts
    │   └── posts/                 # Self-contained HTML blog posts
    ├── scripts/build-posts.js     # Generates data/posts.json (runs prebuild)
    └── styles/                    # Global styles
```

> Detailed development docs — including the full blog-publishing guide — live in [`next-portfolio/README.md`](next-portfolio/README.md).

## 🚀 Getting Started

**Prerequisites:** Node 18+

```bash
git clone https://github.com/Anirbanbhk88/anirbanbhk88.github.io.git
cd anirbanbhk88.github.io/next-portfolio
npm install
```

Run the dev server (http://localhost:3000):

```bash
npm run dev
```

Build and produce the static export (output in `out/`):

```bash
npm run build
npm run export
```

## ✍️ Publishing a Blog Post

1. Copy `next-portfolio/public/posts/_template.html` and edit the title, meta tags, and body.
2. Save it as `next-portfolio/public/posts/your-slug.html`.
3. Push — the post appears on `/blog/` automatically after deploy.

The prebuild script (`next-portfolio/scripts/build-posts.js`) scans the folder, reads each post's meta tags, and regenerates `data/posts.json`. Files prefixed with `_` (like the template) are skipped. See [`next-portfolio/README.md`](next-portfolio/README.md) for the full guide.

## 📦 Deployment

Every push to `master` triggers the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): install dependencies → build → static export → deploy to GitHub Pages via `actions/upload-pages-artifact` and `actions/deploy-pages`. No manual steps required.

## 📬 Contact

- **GitHub:** [Anirbanbhk88](https://github.com/Anirbanbhk88)
- **LinkedIn:** [anirbanbhk](https://www.linkedin.com/in/anirbanbhk/)
- **Email:** [anirbanbhowmick88@gmail.com](mailto:anirbanbhowmick88@gmail.com)
