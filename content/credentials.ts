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
    degree: "MSc Business Analytics",
    institution: "Kingston University",
    period: "2025 – 2026",
    location: "London, UK",
    current: true,
    description:
      "Advanced modules in data science, machine learning, business intelligence and strategic analytics.",
  },
  {
    degree: "BSc Information Technology",
    institution: "The Open University",
    period: "Completed",
    location: "UK",
    current: false,
    description:
      "Comprehensive study of software engineering, networking, databases and IT management.",
  },
  {
    degree: "Level 2 Award in IT",
    institution: "Just IT",
    period: "Completed",
    location: "UK",
    current: false,
    description:
      "Foundational IT skills covering hardware, software and digital communication.",
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
    name: "PMP Certificate of Training",
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
