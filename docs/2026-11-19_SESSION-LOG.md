# Session log — 19 November 2026

Read this first in any new Claude Code session on this repo. It records what changed today, which facts are verified, and what is outdated and still needs replacing. Add a new dated file (docs/YYYY-MM-DD_SESSION-LOG.md) after each working session rather than editing old ones.

## 1. What happened today

1. Fact audit of the live site against Hani's verified application profile (the career facts he has personally confirmed). Several claims on the site were wrong or outdated; all were corrected (section 2).
2. The five "Sample starter" Insights posts were hidden (section 3).
3. Profile photo replaced (section 4).
4. All changes deployed to production on Vercel (auto-deploy from `main`). Deployment status: success.

Commits today: `7f985a9` (fact corrections, posts hidden), `b300a95` (hero gauge 13 years), plus this commit (new photo, this log).

## 2. Fact corrections (content/ and Hero.tsx)

| Area | Was (wrong) | Now (verified) |
|---|---|---|
| MSc | "MSc candidate", "Currently pursuing", "in progress" | MSc Business Analytics, Kingston University, 2025–2026, **completed with Distinction** |
| 30% result | "Looker dashboards… across ISDB operations" | Looker Studio dashboards for supervisors and management at a youth-development non-profit (Altanmiah) — decision-making efficiency up 30% |
| 20% result | "improved documentation workflows" | Gap analysis of reporting and approval workflows at Hady & Adahi — approval and evaluation bottleneck times down 20% |
| Hady & Adahi role | "Technical & Administrative Assistant", May 2022 – Nov 2024 | "Business Analyst (official title: Technical and Administrative Assistant)", **May 2022 – Apr 2025** — always show both titles |
| Altanmiah role | "IT Business Analyst" | "IT Business Analyst and Technical Support" (Volunteer, part-time) |
| Munif Al Nahdi | Two roles (Administrative Officer 2012–2018, Supervisor 2018–2019) | **One role**: Administrative Supervisor, Feb 2012 – Jun 2019 (confirmed by Hani) |
| Years | "10+", "Ten years" | 13 years of work overall, 4+ years of business analysis |
| Skills | Looker (Expert), Excel (Advanced), Power BI, Agile | Looker Studio, Excel and Google Sheets, Power BI **(knowledge only)**, Iterative Delivery. No Expert/Advanced ratings anywhere |
| BSc | "BSc Information Technology" | BSc Information Technology and Computing, The Open University — Second Class Honours (2nd Division) |
| Just IT | "Level 2 Award in IT" | Level 2 Diploma in Digital and IT Skills, Just IT Training (confirmed by Hani) |
| PM training | "PMP Certificate of Training" | Project Management Training: 36 Contact Hours (PMI PMBOK aligned) — never imply a PMP certification |
| SITE_URL | hanialsakani.com | https://hani-portfolio2026-v2.vercel.app (do not use hanialsakani.com) |

## 3. Insights posts

All five posts were AI "Sample starter" content with invented first-person stories and a sample chart with made-up figures. They were renamed with a `_draft-` prefix in `content/posts/` so they are **not published** (files starting with `_` are skipped by `lib/posts.ts`). Do not republish them as they are.

- `_draft-2026-07-12-dashboards-die-week-two.md` — invented story and wrong "ISDB" Looker claim.
- `_draft-2026-07-10-powerbi-vs-tableau.md` — sample chart with fake data.
- `_draft-2026-07-05-sql-sanity-check.md`, `_draft-2026-07-17-unclear-asks.md` — unverified experience claims.
- `_draft-2026-07-08-web3-ai-workshop.md` — the certificate is real (Feb 2026) but details and date are invented.

New posts must use only Hani's own stories (see section 5).

## 4. Profile photo

Hani uploaded a new `public/profile.png` (1122×1402). The site actually renders `public/profile.webp` (Hero and insight article pages), so `profile.webp` was regenerated from the new photo as a 640×640 crop (about 53 KB). `profile.png` is the source file only.

## 5. Verified facts to use (source of truth)

- ECBA (IIBA, 2025). MSc Business Analytics, Kingston University, Distinction (2025–2026). Dissertation: The Influence of Geopolitical Risk Drivers on UK Business Performance — 879,587 UK public procurement records processed in SQL, econometric analysis in Python.
- Altanmiah (volunteer, May 2022 – Nov 2024): Google Forms → Google Sheets (formula cleaning) → Looker Studio pipeline built at no cost; dashboards for supervisors and management, alerts for inactive groups and low-scoring practices; 30%; UAT scenarios; requirements with developers; Cloudflare API clean-up of 700+ redundant videos.
- Hady & Adahi (May 2022 – Apr 2025): gap analysis, SAP and Jira risk tracking, PowerPoint reports and annual reviews for senior leadership; 20%.
- Tools: SQL, Looker Studio (renamed Data Studio in April 2026, per Hani), Python (Pandas), Excel (14 years), Tableau (MSc projects only), PowerPoint (expert user). Fundamental knowledge only: PostgreSQL, MySQL, Power Query, Git. Power BI: knowledge only.
- Never claim: triangulation, SPSS, Tableau at Altanmiah or in the dissertation, formal UML, Confluence, a formal Scrum team, "advanced"/"expert" per tool (PowerPoint expert is the one exception), presenting to a committee.

## 6. Outdated or open items (replace or decide)

1. **Hero headline tone** — "My career is a chart that only goes up and to the right" and "▲ trending since 2012" may read as boastful to employers. Candidate for the design round.
2. **Empty Insights** — the "Read my insights" hero button and the Insights nav link now lead to "Nothing here yet". Either hide them until real posts exist, or write 1–2 true posts (e.g. Altanmiah adoption story, Cloudflare clean-up).
3. **`public/posts/sample-chart-powerbi-tableau.svg`** — unreferenced sample chart still publicly reachable by URL. Delete it.
4. **`content/projects.ts`** — empty, so the Case Files section is hidden. Good candidates: Altanmiah Looker Studio pipeline, Cloudflare clean-up, MSc dissertation, Istanbul Airbnb Tableau project, gym app (https://gym-subzero.netlify.app).
5. **`SITE.headline`** (content/site.ts) is not rendered — the hero headline is hardcoded in `Hero.tsx`. Keep them in sync or move the headline into content/.
6. **`public/profile.png`** (2.4 MB) is not used by the code; keep as source or remove.
7. **CVs elsewhere** — Hani's current CV base is the 8 Nov 2026 version (with MSc Distinction added 18 Nov). Older CVs (October 2026, 5 November 2026) are superseded. If any CV is ever linked from this site, use only the current one. Note: older CVs say "Looker"; the correct tool name is "Looker Studio".
8. Rest of the redesign notes: see `docs/REDESIGN-AUDIT.md` (from July 2026; check it against this log before acting on it).
