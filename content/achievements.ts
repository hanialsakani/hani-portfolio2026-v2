export interface Achievement {
  /** Figure number is derived from array order */
  value: number;
  suffix: string;
  label: string;
  /** Full story — always visible, never hidden behind an interaction */
  description: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    value: 30,
    suffix: "%",
    label: "Efficiency gain",
    description:
      "Designed Looker dashboards that improved decision-making efficiency by 30% across ISDB operations.",
  },
  {
    value: 20,
    suffix: "%",
    label: "Faster approvals",
    description:
      "Reduced project deliverable approval times by 20% through improved documentation workflows.",
  },
  {
    value: 16,
    suffix: "K+",
    label: "Participants supported",
    description:
      "Supported over 16,000 participants in leadership and skill-building initiatives through data-driven reporting.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of experience",
    description:
      "Over 10 years across IT business analysis, project management, and administrative leadership roles.",
  },
];
