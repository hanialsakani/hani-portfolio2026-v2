export interface Experience {
  title: string;
  company: string;
  period: string;
  type: "Full-time" | "Volunteer";
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Business Analyst (official title: Technical and Administrative Assistant)",
    company:
      "The Kingdom of Saudi Arabia Project for Utilization of Hady & Adahi – ISDB",
    period: "May 2022 – Apr 2025",
    type: "Full-time",
    highlights: [
      "Mapped how requests and evaluations moved through the team and ran a gap analysis; standardised the inputs needed from technical teams and contractors, reducing approval and evaluation bottleneck times by 20%",
      "Tracked open items and delivery risks in SAP and Jira, re-prioritised the tracker with the manager as priorities shifted, and kept affected teams informed",
      "Collected information from departments and engineers and summarised it into concise PowerPoint reports and annual review presentations for senior leadership",
      "Coordinated operational logistics with engineering contractors, technical teams and colleagues from many countries",
    ],
  },
  {
    title: "IT Business Analyst and Technical Support",
    company: "Altanmiah Alejabiah Association (Non-Profit)",
    period: "May 2022 – Nov 2024",
    type: "Volunteer",
    highlights: [
      "Led the move from Google Forms and chat messages to a structured digital system: analysed workflows and defined requirements with the developers",
      "Built a free automated data pipeline (Google Forms to Google Sheets with formula-based cleaning, feeding Looker Studio)",
      "Designed Looker Studio dashboards for supervisors and management, flagging inactive groups and low-scoring practices; decision-making efficiency up 30%",
      "Wrote UAT scenarios, tested the system before go-live, and supported staff and volunteers to adopt it",
      "Used SQL and the Cloudflare API to identify and remove 700+ redundant videos, resolving a recurring storage cost",
    ],
  },
  {
    title: "IT Business Analyst and Technical Support",
    company: "Sawaeid Center (Non-Profit)",
    period: "Jan 2021 – Feb 2022",
    type: "Volunteer",
    highlights: [
      "Gathered and validated requirements to build business cases for process and software improvement",
      "Evaluated system effectiveness, uncovering logic flaws, edge cases, risks and dependencies",
      "Prepared briefing papers that bridged business users and technical teams for senior management",
    ],
  },
  {
    title: "Project Management Coordinator",
    company: "Modernization & Development of Slaughterhouses Project – ISDB",
    period: "Jul 2019 – Sep 2020",
    type: "Full-time",
    highlights: [
      "Managed project timelines, resources and deliverables with consulting and engineering firms",
      "Kept risk logs and documentation of assumptions, blockers and budgets, escalating issues that could affect delivery",
    ],
  },
  {
    title: "Administrative Supervisor",
    company: "Munif Al Nahdi Group (Mize) — Central Warehouses",
    period: "Feb 2012 – Jun 2019",
    type: "Full-time",
    highlights: [
      "Set performance goals and deadlines aligned to company plans, and organised workflow so responsibilities were clearly understood",
      "Monitored team productivity against company KPIs and coached colleagues with constructive feedback",
      "Ran the Return to Vendor (RTV) process end to end, tracking supplier claims to resolution",
      "Prepared reports and statistical data for senior management",
    ],
  },
];
