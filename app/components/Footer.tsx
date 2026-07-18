import Link from "next/link";
import { NAV_ITEMS } from "@/app/components/chapters";
import { SITE } from "@/content/site";

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
            <ul className="space-y-1.5">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-ink-soft hover:text-chart-blue transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-soft hover:text-chart-blue transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="/rss.xml" className="text-sm text-ink-soft hover:text-chart-blue transition-colors">
                  RSS feed
                </a>
              </li>
              <li>
                <a href={SITE.cvPath} download className="text-sm text-ink-soft hover:text-chart-blue transition-colors">
                  Download CV ↓
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
