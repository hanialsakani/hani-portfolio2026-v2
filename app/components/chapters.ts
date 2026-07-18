import { PROJECTS } from "@/content/projects";

/**
 * Site navigation config. Section links use "/#id" so they work from
 * any page; the Insights link is a real page. Nav, footer and section
 * ordering all derive from here.
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const SECTIONS: NavItem[] = [
  { id: "impact", label: "Impact", href: "/#impact" },
  { id: "about", label: "About", href: "/#about" },
  ...(PROJECTS.length > 0
    ? [{ id: "case-files", label: "Case Studies", href: "/#case-files" }]
    : []),
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "credentials", label: "Credentials", href: "/#credentials" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export const NAV_ITEMS: NavItem[] = [
  ...SECTIONS,
  { id: "insights", label: "Insights", href: "/insights" },
];
