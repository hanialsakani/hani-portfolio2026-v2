export interface Skill {
  name: string;
  /** Optional proficiency annotation, rendered as a small badge */
  level?: "Expert" | "Advanced";
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Data & BI Tools",
    skills: [
      { name: "Looker", level: "Expert" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "SQL" },
      { name: "Excel", level: "Advanced" },
      { name: "Python" },
    ],
  },
  {
    title: "Business Analysis",
    skills: [
      { name: "Requirements Elicitation" },
      { name: "Stakeholder Analysis" },
      { name: "Process Modeling" },
      { name: "Gap Analysis" },
      { name: "Strategic Analysis" },
      { name: "Use Case Development" },
      { name: "Business Analysis Planning" },
      { name: "Elicitation & Collaboration" },
    ],
  },
  {
    title: "Project & Dev Tools",
    skills: [
      { name: "SAP" },
      { name: "Jira" },
      { name: "GitHub" },
      { name: "Microsoft 365" },
      { name: "Agile" },
    ],
  },
  {
    title: "Working Skills",
    skills: [
      { name: "Generative AI" },
      { name: "Data Storytelling" },
      { name: "Presentation Skills" },
      { name: "Problem Solving" },
    ],
  },
];
