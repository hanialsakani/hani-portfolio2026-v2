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
      "Designed Looker Studio dashboards for supervisors and management at a youth-development non-profit, improving decision-making efficiency by 30%.",
  },
  {
    value: 20,
    suffix: "%",
    label: "Faster approvals",
    description:
      "Ran a gap analysis on reporting and approval workflows, reducing evaluation and approval bottleneck times by 20%.",
  },
  {
    value: 16,
    suffix: "K+",
    label: "Participants supported",
    description:
      "Supported over 16,000 participants in leadership and skill-building initiatives through data-driven reporting.",
  },
  {
    value: 13,
    suffix: "",
    label: "Years of experience",
    description:
      "13 years of work, including 4+ years of business analysis, across IT business analysis, project coordination and administrative leadership.",
  },
];
