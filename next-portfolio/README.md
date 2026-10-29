# Anirban Bhowmick — Portfolio (Next.js)

A modern portfolio built with Next.js (pages router), Tailwind CSS and a
static-export pipeline that deploys to GitHub Pages.

## Quick start

```bash
cd next-portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
next-portfolio/
├── components/       # Header, Hero, About, Experience, Skills, Projects,
│                     # BlogTeaser, Contact, Footer, SectionHeading
├── data/
│   ├── experience.js # Work experience entries (newest first)
│   ├── skills.js     # Grouped skill chips
│   └── posts.json    # Blog manifest (auto-generated — do not edit by hand)
├── pages/
│   ├── index.js      # Single-scroll homepage (all sections)
│   ├── blog/index.js # Blog index (year-grouped list)
│   ├── _app.js       # Fonts (next/font), reveal-on-scroll, smooth anchors
│   └── _document.js  # Pre-paint theme script (no dark-mode flash)
├── public/
│   ├── images/       # Site images (img-*.jpg, blog-*.jpg, portfolio1.jpeg)
│   └── posts/        # Blog posts as self-contained HTML files + post.css
├── scripts/
│   └── build-posts.js  # Scans public/posts → generates data/posts.json
└── styles/globals.css  # Design tokens, reveal animations, focus rings
```

## Build & deploy

```bash
npm run build    # prebuild regenerates data/posts.json, then next build
npm run export   # static export to out/
```

CI (`.github/workflows/deploy.yml`) runs these steps on every push to `master`
and publishes `out/` to the `gh-pages` branch.

## Publishing a blog post

Blog posts are plain, self-contained HTML files — no build step or JSX needed.

1. Copy the template to a new file with a short, lowercase, hyphenated name
   (the filename becomes the URL):

   ```bash
   cp next-portfolio/public/posts/_template.html next-portfolio/public/posts/your-slug.html
   ```

2. Edit the new file:
   - `<title>` — the post title
   - `<meta name="date" content="YYYY-MM-DD">` — publish date
   - `<meta name="tags" content="Tag One, Tag Two">` — comma-separated tags
   - `<meta name="excerpt" content="...">` — 1–2 sentences for the index page
   - `<meta name="author" content="...">` — optional (defaults to Anirban Bhowmick)
   - Write the post body inside `<article class="post-page">` (styles come from
     `/posts/post.css`: headings, figures, blockquotes, code blocks, lists).

3. Save and commit, then push:

   ```bash
   git add next-portfolio/public/posts/your-slug.html
   git commit -m "blog: your post title"
   git push
   ```

CI rebuilds and publishes automatically — `npm run build` runs
`scripts/build-posts.js` first (the `prebuild` step), which scans
`public/posts/*.html`, extracts the title/date/tags/excerpt/author, and
regenerates `data/posts.json`. The blog index (`/blog`) and the homepage
teaser update themselves.

Notes:

- Files whose name starts with `_` (like `_template.html`) are ignored by the
  scanner — never rename the template.
- Missing date falls back to the file's modified time; a missing title falls
  back to the humanized filename.
- Post links on the site are plain `<a href="/posts/your-slug.html">` elements
  — posts are static files served straight from `public/posts/`.

## Customising content

- **Experience / Skills** — edit `data/experience.js` and `data/skills.js`.
- **Projects** — edit the `PROJECTS` array in `components/Projects.js`
  (see the `TODO(customize)` comment there) and drop images into
  `public/images/`.
- **Contact details** — edit `components/Contact.js` and the social links in
  `components/Header.js` / `components/Footer.js`.
- **Theme** — design tokens live in `tailwind.config.js` (color scales, fonts)
  and `styles/globals.css` (CSS variables, dark mode surfaces).
