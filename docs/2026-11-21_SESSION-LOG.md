# Session log — 21 November 2026

Read this first in any new Claude Code session on this repo, together with `docs/2026-11-19_SESSION-LOG.md` (its verified-facts list in section 5 still applies). Add a new dated file after each working session rather than editing old ones.

## 1. What happened today

Hani returned after a long break. The 19 Nov log was reviewed and every open item in its section 6 was checked against the code. Hani approved "Step 1" (quick cleanup, no design decisions) and confirmed that **both light and dark modes stay** in the coming redesign.

Step 1 changes, on branch `claude/portfolio-audit-redesign-yvy94m` (restarted from `main` at `c5d8296`, since PR #1 was already merged):

1. **Sample chart deleted** — `public/posts/sample-chart-powerbi-tableau.svg` removed; its URL now returns 404. (19 Nov log item 6.3.)
2. **Insights hidden until the first real post exists** (19 Nov item 6.2). The server counts published posts (`getAllPosts()`, which skips `_` files). With zero posts:
   - Navbar (desktop + mobile) and footer drop the Insights link (`Navbar` takes a `showInsights` prop; `Footer` computes it itself).
   - The hero's second button reads "See my experience" (links to `#experience`) instead of "Read my insights".
   - The footer RSS link and the `/insights` sitemap entry are omitted.
   - All of these reappear automatically when one post is published — verified today by building with a temporary test post (removed, never committed).
   - The `/insights` page itself still exists but is linked from nowhere.
3. **Hero headline now comes from `content/site.ts`** (19 Nov item 6.5). `Hero.tsx` renders `SITE.headline` (lead / emphasis / tail) instead of hardcoded text, so the visible headline changed from "My career is a chart that only goes up and to the right" to **"Thirteen years of turning operations into measurable decisions."** Edit the headline in `content/site.ts` only.
4. README updated: no published posts yet; `_draft-` files must not be republished as they are.

Verified: `npm run lint` and `npm run build` clean; home page checked in a browser at desktop and mobile widths.

Later in the session (Hani's request), the two hero issues below were fixed and the branch was merged to `main` via a pull request:

5. **Hero kicker** — "▲ trending since 2012" removed; the kicker now reads `SITE.kicker · SITE.location` ("Business Analyst · Data Analytics · Greater London, UK").
6. **Hero chart glitches** — the contact line (skills · email · LinkedIn) now has a page-coloured backing so the chart line passes behind it at every width; the line now ends inside the edge at (588, 19) and the orange end dot is an HTML element positioned at 98% / 11.2% of the chart box, so it is never clipped or stretched by the SVG's `preserveAspectRatio="none"`.

## 2. Still open (carried forward)

1. ~~Hero kicker tone~~ — fixed (item 5 above).
2. **Design round (next step, Hani's request)** — new theme and better visuals; keep light + dark. Process agreed earlier in the project: propose 3 directions, each with a draft of the home page and the Insights page, Hani picks, then build. Waiting on Hani's answer to: what he dislikes about the current look and what feeling he wants (examples of sites he likes help).
3. ~~Hero visual glitches~~ — fixed (item 6 above).
4. **Case Files** — `content/projects.ts` still empty. Candidates (from 19 Nov log): Altanmiah Looker Studio pipeline, Cloudflare clean-up, MSc dissertation, Istanbul Airbnb Tableau project, gym app.
5. **First real Insights posts** — only Hani's own verified stories (19 Nov log section 5). Strong first candidates: the Altanmiah dashboard adoption story, the Cloudflare clean-up.
6. **`public/profile.png`** (2.4 MB) — unused source file; keep or remove (Hani to decide).
7. **CVs** — no CV is linked from the site (removed by Hani's request in July). Unchanged.
