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

### Later the same session (22 Nov)

- **PR #2 merged** (`d0a1a84`) and verified on production. Note: this sandbox's network blocks `*.vercel.app`; the live check was done with a web-fetch tool instead.
- **Counter bug found on production:** the live fetch showed the hero gauges as "+-212%", "-113K+" etc. `Counter.tsx` clamped animation progress only at the top; rAF timestamps can precede the start time and headless renderers use virtual time, so the cubic ease went negative. Fixed by clamping to [0, 1] — **PR #3, open, waiting for Hani to merge** (Claude's merge was blocked because only PR #2's merge had been approved).
- **Design round 4 pitched:** https://claude.ai/artifact/GXXVnrFFTqqj7WTv7fQSuj (private artifact). Hani's brief: the current site is too focused on data analysis; he wants a **business-analysis-led** redesign, big changes, light + dark kept, and nothing that looks sloppy or AI-generated. Three directions, each with a sample home page and Insights page:
  1. **Current state → future state** (recommended): process-map visual language, a real as-is/to-be workflow in the hero (based on the Hady & Adahi gap analysis), case studies as current state / gap / future state / result. Archivo + IBM Plex Mono; slate, process green, red only for bottlenecks.
  2. **Given · When · Then**: user-story hero with the hiring manager as the user; results as acceptance criteria (AC1–AC3) marked met with the proving role. Schibsted Grotesk + JetBrains Mono; black, highlighter yellow.
  3. **The translator**: split hero (problem as the business sees it / what Hani did + result, photo at the seam); optional Arabic version and Arabic posts. Readex Pro (Latin + Arabic); wine and warm white. The Arabic sample text in the pitch must be checked by Hani before any use.
  - Changes proposed for all three: "Business Analyst" leads (data skills supporting); charts and gauges removed; skills open with BA work; "Chart of the Week" post type becomes "Process teardown".
  - **Waiting on Hani's choice** (1, 2, 3 or a mix).

### Direction chosen and phased build agreed (22 Nov)

- **PR #3 merged** (`280b99d`, Hani's explicit request). Live check: gauges no longer show negative values (headless renderers now see 0, since the count-up has not run; acceptable because the redesign removes the gauges and shows numbers as plain text).
- **Hani chose direction 1, "Current state → future state"**, but was not happy with its colours, fonts and sizes. Agreed to build it **phase by phase as a web designer**, with review and approval after each phase:
  1. Visual foundation — colours, fonts, type sizes, light/dark (**current**)
  2. Header and hero — navigation, headline, process map (include a proper vertical phone version of the map)
  3. Outcomes and case studies
  4. Experience, skills, credentials
  5. Contact and footer
  6. Insights — feed, post page, process-teardown format
  7. Final check (phone/tablet/desktop, accessibility, speed, SEO), then merge to `main`
  - Build on the branch; Vercel previews per push; **nothing merges to `main` until phase 7 and Hani's final yes**.
- **Phase 1 pitched:** https://claude.ai/artifact/KDZtM3AKfKr75FE4s5EWR8 — three foundation options, each with light/dark and desktop/phone switches, a type-size table and palettes:
  - **A · Boardroom** (recommended): Plus Jakarta Sans; navy-black ink, process blue `#1f5bd6`, bottleneck red; body 17px, labels 12px caps, H1 44px; 8/10px radii.
  - **B · Workshop**: Figtree; warm charcoal, berry `#8b3a72`, bottleneck amber; body 17.5px, sentence-case labels 13px, H1 48px; pill buttons, 14px radii.
  - **C · Blueprint**: Sora headlines + Inter body + IBM Plex Mono labels 12.5px; process green `#0b7a55`, bottleneck red; body 16.5px, H1 46px; 4px radii.
  - Diagnosis of the round-4 sample that all options fix: headline face too wide/heavy; labels 10–11px too small; monospace caps everywhere; flat grey-green page. Rule from now on: labels ≥ 12px, body 16.5–17.5px, map labels ≈ 12px after scaling.
  - **Waiting on Hani's pick** (A/B/C or a mix, plus any comments).

## 2. Still open (carried forward)

1. ~~Hero kicker tone~~ — fixed (item 5 above).
2. **Redesign** — direction 1 chosen; phased build, Phase 1 (visual foundation) waiting on Hani's pick.
3. ~~Hero visual glitches~~ — fixed (item 6 above).
4. **Case Files** — `content/projects.ts` still empty. Candidates (from 19 Nov log): Altanmiah Looker Studio pipeline, Cloudflare clean-up, MSc dissertation, Istanbul Airbnb Tableau project, gym app.
5. **First real Insights posts** — only Hani's own verified stories (19 Nov log section 5). Strong first candidates: the Altanmiah dashboard adoption story, the Cloudflare clean-up.
6. **`public/profile.png`** (2.4 MB) — unused source file; keep or remove (Hani to decide).
7. **CVs** — no CV is linked from the site (removed by Hani's request in July). Unchanged.
