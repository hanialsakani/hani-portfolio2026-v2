export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  current: boolean;
  description: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "MSc Business Analytics (Distinction)",
    institution: "Kingston University",
    period: "2025 – 2026",
    location: "London, UK",
    current: false,
    description:
      "Awarded with Distinction. Dissertation: The Influence of Geopolitical Risk Drivers on UK Business Performance (SQL processing of 879,587 procurement records, econometric analysis in Python). Modules included machine learning and business intelligence.",
  },
  {
    degree: "BSc Information Technology and Computing",
    institution: "The Open University",
    period: "Completed",
    location: "UK",
    current: false,
    description:
      "Second Class Honours (2nd Division).",
  },
  {
    degree: "Level 2 Diploma in Digital and IT Skills",
    institution: "Just IT Training",
    period: "Completed",
    location: "UK",
    current: false,
    description:
      "Digital and IT skills qualification, England, UK.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certificate of Appreciation: Web3 and AI Workshop",
    issuer: "Kingston University",
    year: "Feb 2026",
  },
  {
    name: "ECBA – Entry Certificate in Business Analysis",
    issuer: "IIBA",
    year: "Jul 2025",
  },
  {
    name: "Adaptive US Business Analyst Bootcamp",
    issuer: "Adaptive US Inc.",
    year: "Jul 2025",
  },
  {
    name: "IIBA Member",
    issuer: "IIBA",
    year: "Jun 2025",
  },
  {
    name: "Adaptive US ECBA Training",
    issuer: "Adaptive US Inc.",
    year: "Mar 2025",
  },
  {
    name: "Project Management Training: 36 Contact Hours (PMI PMBOK aligned)",
  },
  {
    name: "Programming & Web Development (PHP)",
  },
  {
    name: "Data Visualisation Workshops: Infographic Design & PowerPoint Slide Zoom",
  },
  {
    name: "Data Analysis Track & Full Stack Developer Track",
    issuer: "1 Million Arab Coders Initiative",
  },
];
