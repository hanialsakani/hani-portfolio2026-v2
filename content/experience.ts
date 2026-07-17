export interface Experience {
  title: string;
  company: string;
  period: string;
  type: "Full-time" | "Volunteer";
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Technical & Administrative Assistant",
    company:
      "The Kingdom of Saudi Arabia Project for Utilization of Hady & Adahi – ISDB",
    period: "May 2022 – Nov 2024",
    type: "Full-time",
    highlights: [
      "Managed project documentation using SAP and Jira; coordinated with contractors and engineers",
      "Oversaw operational logistics for weekly slaughter processes and beneficiary country collaborations",
      "Streamlined meeting schedules and executive reporting, reducing approval times by 20%",
      "Developed professional presentations and reports to support project management and decision-making",
    ],
  },
  {
    title: "IT Business Analyst",
    company: "Altanmiah Alejabiah Association (Non-Profit)",
    period: "May 2022 – Nov 2024",
    type: "Volunteer",
    highlights: [
      "Analysed business procedures and assessed workflows to align with organizational goals",
      "Designed interactive reports and dashboards to support data-driven strategies",
      "Provided technical support and proposed system improvements to enhance efficiency",
    ],
  },
  {
    title: "IT Business Analyst",
    company: "Sawaeid Center (Non-Profit)",
    period: "Jan 2021 – Feb 2022",
    type: "Volunteer",
    highlights: [
      "Documented and analysed work procedures, identifying areas for improvement",
      "Conducted stakeholder interviews to evaluate system effectiveness and recommended updates",
      "Prepared technical reports and delivered findings to senior decision-makers",
    ],
  },
  {
    title: "Project Management Coordinator",
    company: "Modernization & Development of Slaughterhouses Project – ISDB",
    period: "Jul 2019 – Sep 2020",
    type: "Full-time",
    highlights: [
      "Managed project timelines, budgets, and deliverables to ensure successful execution",
      "Communicated with consulting firms to define project requirements and scope",
      "Maintained accurate project documentation for efficient tracking and compliance",
    ],
  },
  {
    title: "Administrative Supervisor",
    company: "Munif Al Nahdi Group (Mize)",
    period: "Sep 2018 – Jun 2019",
    type: "Full-time",
    highlights: [
      "Setting goals for performance and deadlines in compliance with company plans",
      "Organizing workflow and ensuring employees understand duties",
      "Monitoring employee productivity and providing constructive feedback",
      "Managing administrative works and KPI delivery",
      "Management of supply chain inventories and suppliers claims",
    ],
  },
  {
    title: "Administrative Officer",
    company: "Munif Al Nahdi Group (Mize)",
    period: "Feb 2012 – Sep 2018",
    type: "Full-time",
    highlights: [
      "Management of office supplies and inventories",
      "Maintenance of reliable office database for document safekeeping",
      "Preparation of minutes, calendar of activities, and travel itineraries",
      "Preparation of reports and statistical data for higher management",
      "Technical and administrative support to colleagues and clients",
    ],
  },
];
