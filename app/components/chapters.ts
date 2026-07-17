import { PROJECTS } from "@/content/projects";

/**
 * The report's table of contents. Navbar links, section anchors and
 * chapter numbers all derive from this list, so adding a section (or
 * publishing the first case study) renumbers everything automatically.
 */
export interface Chapter {
  id: string;
  label: string;
}

export const CHAPTERS: Chapter[] = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  ...(PROJECTS.length > 0 ? [{ id: "case-files", label: "Case Files" }] : []),
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export function chapterNumber(id: string): string {
  return String(CHAPTERS.findIndex((c) => c.id === id) + 1).padStart(2, "0");
}
