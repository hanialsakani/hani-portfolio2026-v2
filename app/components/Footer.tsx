import { CHAPTERS } from "@/app/components/chapters";
import { SITE } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink mt-8">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-serif font-semibold text-ink">{SITE.name}</p>
            <p className="text-sm text-ink-soft mt-1">{SITE.role}</p>
            <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint mt-2">
              {SITE.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-faint mb-3">
              Contents
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {CHAPTERS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-ink-soft hover:text-navy transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-faint mb-3">
              Correspondence
            </p>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-ink-soft hover:text-navy transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft hover:text-navy transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={SITE.cvPath}
                  download
                  className="text-sm text-ink-soft hover:text-navy transition-colors"
                >
                  Download CV ↓
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-hairline pt-5">
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint">
            © {new Date().getFullYear()} {SITE.name} · Compiled in London
          </p>
          <a
            href="#top"
            className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint hover:text-navy transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
