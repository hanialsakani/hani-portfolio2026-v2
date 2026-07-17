# Hani Alsakani — Portfolio

Personal portfolio of Hani Alsakani, Business Analyst & Data Analytics.
Designed as **"The Annual Report"** — an editorial, print-inspired layout with a
navy "Ledger & Brass" palette and a light/dark theme.

Built with Next.js (App Router), Tailwind CSS v4 and framer-motion.

## Updating your portfolio (no code required)

All career data lives in `content/` — components only render it. To update the
site, edit the relevant file:

| File | What it controls |
|---|---|
| `content/site.ts` | Name, headline, contact details, availability, CV path, SEO text |
| `content/achievements.ts` | The impact figures (Fig. 01–04) and their stories |
| `content/experience.ts` | Work history entries and bullet points |
| `content/skills.ts` | Skill groups and proficiency badges |
| `content/credentials.ts` | Education and the certifications ledger |
| `content/projects.ts` | Case studies — the "Case Files" chapter appears automatically once the first project is added |

Chapter numbers, the navigation and the footer table of contents all derive
from `app/components/chapters.ts` and renumber automatically.

### CV download

Place your CV at `public/cv/Hani-Alsakani-CV.pdf`. Every "Download CV" button
already points there.

### Before deploying

Set `SITE_URL` in `content/site.ts` to the real domain — it drives canonical
URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Architecture notes

- **Theming** — semantic CSS variables in `app/globals.css` (`--paper`, `--ink`,
  `--navy`, `--brass`, …) mapped to Tailwind utilities via `@theme inline`.
  Adding or adjusting a theme is one CSS block; components never change.
- **Motion** — scroll-triggered reveals via `app/components/ui/Reveal.tsx`;
  every animation honours `prefers-reduced-motion`.
- **SEO** — metadata in `app/layout.tsx`, JSON-LD Person schema in
  `app/page.tsx`, plus `app/sitemap.ts` and `app/robots.ts`.
