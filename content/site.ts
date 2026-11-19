/**
 * Single source of truth for identity, contact and site-wide settings.
 * Update your portfolio by editing the files in content/ — components
 * never hardcode career data.
 */

// Deployed domain (used for canonical URLs, Open Graph, sitemap and robots).
export const SITE_URL = "https://hani-portfolio2026-v2.vercel.app";

export const SITE = {
  name: "Hani Alsakani",
  shortName: "H. Alsakani",
  role: "Business Analyst & Data Analytics",
  location: "Greater London, UK",
  availability: "Open to opportunities",
  email: "hanialsakani@gmail.com",
  linkedin: {
    label: "hani-alsakani-ecba",
    url: "https://www.linkedin.com/in/hani-alsakani-ecba-818547b8/",
  },
  languages: ["English", "Arabic"],
  focusArea: "Business Analysis & Data",
  // The report conceit: the portfolio reads as a performance review.
  folio: "Performance Review · 2012—2026",
  kicker: "Business Analyst · Data Analytics",
  headline: {
    lead: "Thirteen years of turning operations into ",
    emphasis: "measurable",
    tail: " decisions.",
  },
  standfirst:
    "ECBA-certified business analyst with an MSc in Business Analytics (Distinction) from Kingston University. I translate complex data into decisions managers can act on — and document the results.",
  responseNote: "I typically respond within 24 hours",
  heroSkills: ["SQL", "Looker Studio", "Python", "Excel", "Tableau", "UAT", "ECBA"],
  description:
    "Professional portfolio of Hani Alsakani — Business Analyst and Data Analytics specialist based in Greater London, UK. ECBA certified, MSc Business Analytics (Distinction), working with SQL, Looker Studio, Python and Excel on requirements, dashboards and process improvement.",
  keywords: [
    "Business Analyst",
    "Data Analytics",
    "Looker Studio",
    "SQL",
    "Python",
    "ECBA",
    "London",
  ],
} as const;

export const QUICK_FACTS = [
  { label: "Location", value: SITE.location },
  { label: "Certification", value: "ECBA (IIBA)" },
  { label: "Languages", value: SITE.languages.join(", ") },
  { label: "Availability", value: SITE.availability },
  { label: "Focus area", value: SITE.focusArea },
] as const;

export const ABOUT_PARAGRAPHS = [
  {
    text: "I am a {Business Analyst} and {Data Analytics} professional. The two things I enjoy most are understanding how people really work and translating that, in English or Arabic, into requirements, dashboards and processes that teams actually adopt.",
  },
  {
    text: "My career spans {13 years}, including {4+ years of business analysis}, across IT business analysis, project coordination and administrative leadership. Highlights include a {30% improvement in decision-making efficiency} from dashboards I designed for a non-profit, {20% shorter approval bottlenecks} after a workflow gap analysis, and reporting for programmes reaching over {16,000 participants}.",
  },
  {
    text: "I completed an {MSc in Business Analytics with Distinction} at Kingston University (2025–2026), where my dissertation processed 879,587 UK public procurement records in SQL and used Python for econometric analysis.",
  },
] as const;
