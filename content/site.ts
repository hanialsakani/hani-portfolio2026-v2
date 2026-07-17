/**
 * Single source of truth for identity, contact and site-wide settings.
 * Update your portfolio by editing the files in content/ — components
 * never hardcode career data.
 */

// Update to the real deployed domain before going live (used for
// canonical URLs, Open Graph, sitemap and robots).
export const SITE_URL = "https://hanialsakani.com";

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
    lead: "Ten years of turning operations into ",
    emphasis: "measurable",
    tail: " decisions.",
  },
  standfirst:
    "ECBA-certified analyst and MSc Business Analytics candidate at Kingston University. I translate complex data into decisions executives can act on — and document the results.",
  responseNote: "I typically respond within 24 hours",
  // Place the PDF at public/cv/Hani-Alsakani-CV.pdf to activate the download.
  cvPath: "/cv/Hani-Alsakani-CV.pdf",
  heroSkills: ["Power BI", "SQL", "Python", "Agile", "Tableau", "Looker", "ECBA"],
  description:
    "Professional portfolio of Hani Alsakani — Business Analyst and Data Analytics specialist based in Greater London, UK. ECBA certified with expertise in Tableau, Power BI, SQL, and process optimisation.",
  keywords: [
    "Business Analyst",
    "Data Analytics",
    "Tableau",
    "Power BI",
    "SQL",
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
    text: "I am a results-driven {Business Analyst} and {Data Analytics} professional with a proven track record in data-driven decision making, business process optimisation, and executive stakeholder engagement. I combine technical expertise with sharp business acumen to translate complex data into actionable decisions.",
  },
  {
    text: "My career spans over {10 years} across IT business analysis, project management, and administrative leadership roles, where I delivered a {30% efficiency improvement}, achieved {20% faster approval cycles}, and supported programmes for over {16,000 participants}.",
  },
  {
    text: "Currently pursuing an {MSc in Business Analytics} at Kingston University (2025–2026), I am deepening my expertise in advanced analytics and machine learning to drive even greater impact.",
  },
] as const;
