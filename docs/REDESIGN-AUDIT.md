# Portfolio Audit & Redesign Strategy

**Project:** hani-portfolio2026-v2 · **Date:** 2026-07-16 · **Status:** Awaiting approval — no code changed yet

This document is the Phase 1–4 deliverable of the redesign engagement: a complete audit of the
existing portfolio, a trends comparison, proposed redesign directions with a recommendation, and
a phased implementation roadmap. Nothing has been rewritten; all findings reference the current
code as committed.

---

## 1. Architecture audit

### Stack (healthy, modern)

| Layer | Choice | Assessment |
|---|---|---|
| Framework | Next.js 16.2.6, App Router, Turbopack | ✅ Current, builds clean, fully static output |
| UI | React 19.2.4 | ✅ Current |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) | ✅ Current, but see theme-override problem below |
| Animation | framer-motion 12 | ✅ Good choice, overused in places |
| Fonts | Geist, Syne, Manrope, JetBrains Mono via `next/font` | ⚠️ 4 families always loaded; 3 are used only by one theme |
| TypeScript | Strict typing throughout | ✅ Good |

### Structure

```
app/
  layout.tsx            — fonts, metadata, theme init script, cursor + progress bar
  page.tsx              — single page, 10 sections composed in order
  globals.css           — theme variables + ~170 lines of manual Tailwind class overrides
  contexts/ThemeContext.tsx
  components/           — 12 components, one per section + 4 chrome components
public/profile.png      — 620 KB PNG (only real asset)
```

**Sections in order:** Hero → About → Achievements → Skills → Experience → Certifications → Education → Contact → Marquee.

### Finding A1 — All content is hardcoded inside components (highest-impact structural issue)

Every piece of career data lives as a constant inside the component that renders it:
`EXPERIENCES` in `ExperienceSection.tsx:15`, `CERTS` in `CertificationsSection.tsx:7`,
`EDUCATION` in `EducationSection.tsx:7`, `SKILL_GROUPS` **and** a second near-duplicate
`EXEC_ACCORDION_GROUPS` in `SkillsSection.tsx:7-65`, `ACHIEVEMENTS` in
`AchievementsSection.tsx:7`, plus bio text, stats, and contact details scattered across
`HeroSection`, `AboutSection`, `ContactSection`, `Navbar`, and `MarqueeSection`.

Consequences:
- Adding a certification means editing presentation code.
- The same facts are duplicated: "10+ years" appears in 3 files; email in 3 files; the skills
  list exists twice in one file with different ordering.
- No path to CMS, filtering, search, or a projects database without refactoring anyway.

### Finding A2 — The dual-theme system is the main source of technical debt

The "Space" (indigo/cyan) and "Executive" (red) themes are implemented in two stacked ways:

1. **~170 lines of manual override CSS** (`globals.css:168-295`) that re-declare individual
   Tailwind utility classes (`.text-indigo-300`, `.bg-indigo-500\/20`, gradient class-pair
   selectors like `.from-indigo-400.to-cyan-400`, …) under `[data-theme="executive"]`. Every
   new utility class used in any component must be manually mirrored here or the executive
   theme silently breaks. This is unmaintainable by design.
2. **Component-level forks**: `isExec` branches render *entirely different UI* — Achievements
   becomes tap-to-reveal flip cards instead of counters, Skills becomes an accordion instead of
   a grid, Experience becomes a carousel + modal instead of a timeline. Roughly 40% of the
   component code exists only to serve the second theme, and the two themes present
   *different amounts of information* (e.g. full achievement descriptions are only reachable in
   Executive mode, `AchievementsSection.tsx:12` vs `:15`).

### Finding A3 — Performance

- `public/profile.png` is **620 KB** for a 624×675 avatar rendered at ≤320 px. Should be ≤30 KB
  (AVIF/WebP). `next/image` mitigates at runtime but the source asset is 20× oversized.
- `ParticleBackground` runs an O(n²) loop (~1,500 distance checks/frame) on a full-viewport
  canvas, forever — it never pauses when the tab is hidden or the canvas is scrolled past, is not
  DPR-scaled (blurry on retina), and ignores `prefers-reduced-motion`.
- `CustomCursor` runs a permanent rAF loop and renders on touch devices where it does nothing.
- **No `prefers-reduced-motion` support anywhere**, despite ~15 infinite animations (marquee,
  ripple rings, orbital, typewriter, pulsing dots, floating badges, glow orbs).
- Syne, Manrope and JetBrains Mono are downloaded for every visitor but only used when the
  Executive theme is active.

### Finding A4 — SEO

- ✅ Good `title`/`description`/`keywords` in `layout.tsx:28`.
- ❌ No Open Graph or Twitter card metadata → link shares on LinkedIn (the single most likely
  place this URL gets posted) render with no preview.
- ❌ No `sitemap.ts`, no `robots.ts`, no canonical URL / `metadataBase`.
- ❌ No structured data (`Person` JSON-LD) — free credibility for a personal brand.
- ❌ Section navigation uses `scrollIntoView` buttons, not `<a href="#…">` links: no deep links
  (`/#experience`), no crawlable anchors, breaks middle-click/open-in-new-tab.

### Finding A5 — Accessibility

- `cursor: none !important` on **every element** (`globals.css:142-146`) hides the native cursor
  globally, including over links and text — a real usability harm with no fallback if the custom
  cursor fails or JS is disabled.
- Emoji used as icons (⚡🚀👥📊🎖️🏆📧🔗📍) with no `aria-hidden` or text alternatives —
  screen readers announce "rocket" etc.; also reads visually as template-grade, not premium.
- Executive flip cards and the counter cards are click/hover-only `div`s — not focusable, not
  keyboard operable, content permanently hidden from keyboard and screen-reader users.
- Experience carousel: arrow/dot buttons have no `aria-label`s; 4 of 6 roles are invisible at any
  time; no swipe support on the touch devices the pattern implies.
- Modal (`ExperienceModal`) has no focus trap and focus is not returned on close.
- Hamburger button has `aria-label` ✅ but no `aria-expanded` state.
- Gradient-clipped text in several places falls below WCAG AA contrast at small sizes.
- `scroll-behavior: smooth` is applied unconditionally (should respect reduced-motion).

### Finding A6 — Code quality details

- `SectionHeading` is defined once in `AboutSection.tsx:94` and then re-implemented inline in
  five other sections — same 15 lines, six times.
- The typewriter hook silences `react-hooks/exhaustive-deps` (`HeroSection.tsx:74`).
- Nav link ids are duplicated between `Navbar` and section ids with no single source of truth;
  no active-section highlighting.
- No footer component (Marquee acts as an accidental footer, with no copyright/links).
- No tests, no CI workflow.

---

## 2. UI / UX / Branding review

### What already works — and must be preserved

- **All the substance is here**: quantified achievements (30% efficiency, 20% faster approvals,
  16K participants), full 10-year work history with bullet-level detail, 9 certifications, 3
  education entries, skills taxonomy, ECBA + MSc credentials, location, availability, languages,
  email + LinkedIn. *None of this gets removed — it gets re-presented.*
- Consistent section rhythm (centered heading + underline + card grid).
- Sensible mobile breakpoints; content is readable on small screens.
- Solid instinct for micro-interaction and polish — it just needs restraint and direction.

### Where it falls short, by audience

**Recruiter (6-second scan):** The hero leads with "Welcome to my portfolio" (filler), a
typewriter that takes seconds to spell out the job title, and ~8 simultaneous animations. The
critical facts (name, title, location, ECBA, MSc, 10 yrs) *are* present — but compete with
decoration. The #1 missing artifact: **a downloadable CV** and **a projects/case-study section**.
For a data-analytics professional, "show me a dashboard you built" is the first ask, and the
portfolio has zero work samples — this is the single biggest content gap.

**Hiring manager / client:** Wants evidence and depth: what problem, what you did, what changed.
The achievement numbers exist but their *stories* are hidden — in Space theme the full
descriptions never render; in Executive theme they're behind an unexplained tap-tap-flip
interaction ("Tap once to count · tap again to flip"). Mystery-meat interactions bury your best
material.

**Mobile user:** Custom cursor is dead weight; carousel needs swipe but only offers buttons;
infinite animations cost battery; otherwise layout holds up reasonably.

**Brand impression:** The current visual language (particle network, orbital rings, typewriter,
emoji icons, dual novelty themes) patterns-matches to a *junior developer template*, not a
senior business analyst who advises executives. Nothing about the design says "this person
turns data into decisions." The Space/Executive toggle is a fun engineering exercise but a
branding liability: it makes the identity literally ambiguous, and visitors don't choose brands —
brands choose themselves.

---

## 3. 2025–2026 portfolio trends — what strong senior portfolios do

Extracted best practices (not designs to copy):

1. **Case-study-first.** Work samples with problem → approach → measurable outcome carry the
   site; everything else supports them.
2. **One confident theme + light/dark**, not multiple brand personalities. Accent color used
   sparingly (Linear, Stripe, Vercel aesthetic): near-black surfaces, high-contrast type, one
   accent, generous whitespace.
3. **Typography does the impressing.** Large, tight display type; restrained body; real icons
   (Lucide/heroicons or custom SVG), never emoji.
4. **Calm, purposeful motion.** Scroll-triggered reveals (once), subtle hovers, honored
   `prefers-reduced-motion`. No permanent background animation loops.
5. **Bento/stat grids** for at-a-glance credibility (metrics, credentials, tools) — perfect fit
   for an analyst whose brand *is* quantification.
6. **Content as data** (JSON/TS/MDX), so the site grows by editing content files, with project
   detail pages, tags, and filtering added later without redesign.
7. **Proof and trust artifacts:** CV download, links to verifiable credentials (IIBA/Credly),
   testimonials, availability status, response-time promise (already present ✅).

---

## 4. Redesign directions

### Option 1 — "Data-Driven Executive" (dark professional, Stripe/Linear-inspired) ★ RECOMMENDED

- **Philosophy:** Quiet confidence. Near-black canvas, one accent, editorial typography,
  numbers as the visual heroes. The portfolio itself feels like a well-designed analytics product.
- **Audience fit:** Recruiters, hiring managers, consultancy clients — exactly your targets.
- **Strengths:** Matches the BA/analytics brand perfectly; ages well; easiest to keep consistent;
  dark ancestry means most existing content ports naturally.
- **Weaknesses:** Less flashy; personality must come from typography, copy, and data-viz accents.
- **Effort:** Medium. **Scalability:** Excellent. **Maintenance:** Low.

### Option 2 — Modern SaaS / Bento

- **Philosophy:** Everything at a glance in a dense, playful grid of tiles (stats, map, stack,
  current role, CTA).
- **Strengths:** Very current, mobile-friendly, extensible (new tile = new content).
- **Weaknesses:** Trend-locked (will date faster); harder to tell a career *story*; density can
  read gimmicky if not executed tightly.
- **Effort:** Medium-high. **Scalability:** Good. **Maintenance:** Medium.

### Option 3 — Elegant Corporate Light

- **Philosophy:** White/warm-gray, serif display headings, consultancy-report aesthetic
  (McKinsey-meets-modern-web).
- **Strengths:** Maximum trust for conservative corporate audiences; superb readability/print
  affinity.
- **Weaknesses:** Total visual rewrite from current dark base (highest migration risk); harder
  to make memorable; light-only unless doubled effort.
- **Effort:** High. **Scalability:** Good. **Maintenance:** Low.

### Option 4 — Creative Engineer (evolve current identity)

- **Philosophy:** Keep the expressive dark-space personality; refine rather than replace.
- **Strengths:** Least change; keeps what you clearly enjoy building.
- **Weaknesses:** Fights the audit findings — the identity itself is what reads junior; keeps
  the highest-maintenance parts.
- **Effort:** Low-medium. **Scalability:** Poor (debt remains). **Maintenance:** High.

### Recommendation

**Option 1, "Data-Driven Executive,"** with tasteful data-visualization DNA as the personality
layer (e.g., the achievements grid rendered as clean stat tiles with animated-once counters, a
skills matrix instead of pill soup, a timeline with a plotted career line). It is the direction
where your profession and your design language reinforce each other, and it directly resolves
the branding, maintainability, and dual-theme findings. The Space/Executive toggle is replaced
by a single confident brand with an optional light/dark switch (standard, expected, cheap to
maintain via CSS variables — *not* via class overrides).

---

## 5. Target information architecture

```
Navbar        sticky, anchor links (real #hrefs), active-section highlight, CV button
1  Hero       name, title, value proposition, location/availability, 2 CTAs, key stats strip
2  About      narrative + quick-facts (ports from current, tightened copy)
3  Impact     stat tiles w/ full stories visible (merges "Achievements", nothing hidden)
4  Projects   NEW — 2–4 case studies: context → action → measurable result (dashboards, BI work,
              MSc projects). Grows into filterable grid + detail pages later.
5  Experience single vertical timeline (keep — it was the better of the two variants)
6  Skills     grouped matrix with proficiency signal (Expert/Advanced kept from current data)
7  Credentials merges Certifications + Education into one "proof" zone; links to verifiers
8  Contact    email CTA + LinkedIn + location + response-time promise (keep)
Footer        NEW — copyright, quick links, LinkedIn, "built with" (replaces bare marquee)
```

Every current fact survives; the presentation changes. Sections map 1:1 to data files.

---

## 6. Target architecture (future-proofing)

```
content/
  site.ts          — name, role, contacts, socials, availability   (single source of truth)
  experience.ts    — typed Experience[]
  projects.ts      — typed Project[] (new)
  skills.ts        — typed SkillGroup[]
  credentials.ts   — certifications + education
  achievements.ts  — impact stats + stories
app/
  components/ui/   — SectionHeading, Card, Badge, StatTile, Timeline… (shared primitives)
  components/sections/ — one thin section component per content file
  (sitemap.ts, robots.ts, opengraph-image.tsx, manifest)
```

- **Theming:** semantic CSS variables (`--surface`, `--accent`, `--text-muted`…) + `data-theme`
  for light/dark. Components reference tokens only → adding a theme = one CSS block, zero
  component edits, zero class-override files.
- **Growth paths already accounted for:** blog/MDX (`app/blog/[slug]`), project detail pages,
  tag filtering, localization (content files keyed by locale), analytics (one provider component),
  CMS later (content files become fetchers without touching components).

---

## 7. Implementation roadmap (each phase ships independently; approval gate between phases)

| Phase | Scope | Files | Risk | Impact |
|---|---|---|---|---|
| **A. Foundation** | Extract all content to `content/*.ts`; shared `SectionHeading`/UI primitives; semantic design tokens; remove dual-theme override layer & `isExec` forks (single brand); anchor-link nav | all components, globals.css, new `content/` | Low (mechanical, no visual change yet beyond theme unification) | Invisible now, enables everything |
| **B. Visual redesign** | New tokens/typography/palette; redesigned Hero, stat tiles, timeline, skills matrix, credentials; real SVG icons; motion system with `prefers-reduced-motion` | sections + globals | Medium | Dramatic |
| **C. New content surfaces** | Projects/case-studies section (content from you), Footer, CV download, OG/Twitter/JSON-LD/sitemap/robots, optimized profile image | new components + metadata | Low | High (recruiter value) |
| **D. Polish & platform** | Light/dark toggle, accessibility pass (focus, labels, contrast), performance pass (drop particle/cursor or replace with cheap static texture), analytics, Lighthouse ≥95 across the board | chrome components | Low | Medium |

**Testing checklist per phase:** `npm run build` clean · mobile 360px/tablet/desktop visual pass ·
keyboard-only navigation · reduced-motion mode · Lighthouse (perf/a11y/SEO) · link-share preview.

---

## 8. Decisions needed before Phase A

1. **Approve direction** — Option 1 "Data-Driven Executive" (or pick another).
2. **Theme toggle** — replace Space/Executive with single brand + light/dark? (Recommended: yes.)
3. **Accent color** — keep the indigo/cyan family, adopt the crimson, or a new hue?
4. **Projects section** — can you supply 2–4 case studies (even MSc coursework / dashboard
   screenshots with anonymized data)? This is the highest-value addition.
5. **CV file** — do you have a PDF to wire up for download?
