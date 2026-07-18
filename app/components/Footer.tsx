import Link from "next/link";
import { NAV_ITEMS } from "@/app/components/chapters";
import { SITE } from "@/content/site";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function RssIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line mt-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display font-bold text-ink flex items-center gap-2">
              <svg width="20" height="14" viewBox="0 0 22 16" aria-hidden="true">
                <polyline points="1,13 6,10 11,11 16,5 21,2" fill="none" stroke="var(--chart-blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21" cy="2" r="2.2" fill="var(--chart-orange)" />
              </svg>
              {SITE.name}
            </p>
            <p className="text-sm text-ink-soft mt-1">{SITE.role}</p>
            <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint mt-2">
              {SITE.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint mb-3">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {NAV_ITEMS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link href={href} className="text-sm text-ink-soft hover:text-chart-blue transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-faint mb-3">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent("Hello Hani — from your portfolio")}`}
                  className="inline-flex items-center gap-2.5 text-sm text-ink-soft hover:text-chart-blue transition-colors break-all"
                >
                  <MailIcon />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-ink-soft hover:text-chart-blue transition-colors"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/rss.xml" className="inline-flex items-center gap-2.5 text-sm text-ink-soft hover:text-chart-orange transition-colors">
                  <RssIcon />
                  RSS feed
                </a>
              </li>
              <li>
                <a href={SITE.cvPath} download className="inline-flex items-center gap-2.5 text-sm text-ink-soft hover:text-chart-green transition-colors">
                  <DownloadIcon />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-5">
          <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint">
            © {new Date().getFullYear()} {SITE.name} · plotted in London
          </p>
          <a href="#top" className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint hover:text-chart-blue transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
