/**
 * Case files — project case studies.
 *
 * The section stays hidden while this array is empty. To publish a case
 * study, add an entry following the Project shape; the "Case Files"
 * chapter appears automatically, no component changes needed.
 */

export interface Project {
  title: string;
  /** One-line context: organisation, timeframe */
  context: string;
  /** The business problem, in one or two sentences */
  problem: string;
  /** What you actually did */
  approach: string;
  /** The measurable outcome — lead with the number */
  result: string;
  tools: string[];
  /** Optional link to a live dashboard, repo or write-up */
  link?: { label: string; url: string };
  /** Optional image under public/, e.g. "/projects/looker-ops.png" */
  image?: string;
}

export const PROJECTS: Project[] = [
  // Example (delete the surrounding comment markers to publish):
  // {
  //   title: "Operations decision dashboard",
  //   context: "ISDB · 2023–2024",
  //   problem:
  //     "Executives lacked a single view of weekly operational throughput.",
  //   approach:
  //     "Modelled the reporting workflow, consolidated five spreadsheet sources and built a Looker dashboard with drill-downs per beneficiary country.",
  //   result: "30% faster decision cycles across operations.",
  //   tools: ["Looker", "SQL", "Process Modeling"],
  // },
];
