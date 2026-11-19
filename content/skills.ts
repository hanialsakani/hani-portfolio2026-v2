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
      { name: "Looker Studio" },
      { name: "SQL" },
      { name: "Excel & Google Sheets" },
      { name: "Python (Pandas)" },
      { name: "Tableau (MSc)" },
      { name: "PowerPoint (expert)" },
      { name: "Power BI (knowledge)" },
    ],
  },
  {
    title: "Business Analysis",
    skills: [
      { name: "Requirements Elicitation" },
      { name: "Stakeholder Analysis" },
      { name: "Process Modeling" },
      { name: "Gap Analysis" },
      { name: "User Scenarios & Use Cases" },
      { name: "User Acceptance Testing (UAT)" },
      { name: "Data Flow Diagrams" },
      { name: "Workshop Facilitation" },
    ],
  },
  {
    title: "Project & Dev Tools",
    skills: [
      { name: "SAP" },
      { name: "Jira" },
      { name: "GitHub" },
      { name: "Microsoft 365" },
      { name: "Iterative Delivery" },
    ],
  },
  {
    title: "Working Skills",
    skills: [
      { name: "AI-assisted Development (Claude Code)" },
      { name: "Data Storytelling" },
      { name: "Presentation Skills" },
      { name: "Problem Solving" },
    ],
  },
];
