# Hani Alsakani — Portfolio

Personal portfolio of Hani Alsakani, Business Analyst & Data Analytics.
Designed as **"Living Charts"** — a bright, editorial data-art identity where
the career line literally draws itself — with a light/dark theme and a
continuously-updated **Insights** feed.

Built with Next.js (App Router), Tailwind CSS v4 and framer-motion.

## ✍️ Publishing a post (the thing you'll do most)

Add one markdown file to `content/posts/` — that's the whole workflow.
Works from GitHub's web editor, including on your phone.

```md
---
title: My new post title
type: note        # note | article | chart | win | toolbox
tags: [BA-practice, dashboards]
date: 2026-08-01
---
Your post body in plain markdown…
```

- **note / chart / win** → render fully inside the `/insights` feed
- **article / toolbox** → get their own shareable page at `/insights/<filename>`
- The newest post automatically appears in the homepage "Latest from Insights"
  strip, the RSS feed (`/rss.xml`) and the sitemap. Nothing else to update.
- Cross-post to LinkedIn: paste the first lines there with a link — every
  article page has a one-click LinkedIn share button too.

The four posts currently in `content/posts/` are editable starter samples.

## Updating career data (no code required)

| File | What it controls |
|---|---|
| `content/site.ts` | Name, headline, contacts, availability, CV path, SEO text, `SITE_URL` |
| `content/achievements.ts` | Impact figures and their stories |
| `content/experience.ts` | Work history |
| `content/skills.ts` | Skill groups + proficiency (drives the heat matrix) |
| `content/credentials.ts` | Education and certifications |
| `content/projects.ts` | Case studies — section + nav link appear automatically once the first project is added |

### CV download

Place your PDF at `public/cv/Hani-Alsakani-CV.pdf` — every "Download CV"
button already points there.

### Before deploying

Set `SITE_URL` in `content/site.ts` to the real domain (canonical URLs,
Open Graph, RSS, sitemap and robots all derive from it).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
npm run lint
```

## Architecture notes

- **Theming** — semantic CSS variables in `app/globals.css` mapped to Tailwind
  utilities via `@theme inline`; light/dark toggle persisted to localStorage,
  OS preference honoured on first visit.
- **Charts** — hand-rolled SVG (career area, gauge rings, sparklines, mini
  bars); no chart library. All animation honours `prefers-reduced-motion`.
- **Posts** — parsed at build time in `lib/posts.ts` (gray-matter + marked);
  client-safe metadata lives in `lib/post-types.ts`.
- **SEO** — metadata + OG in layouts/pages, JSON-LD (Person on home, Article
  on posts), `app/sitemap.ts`, `app/robots.ts`, `app/rss.xml/route.ts`.
