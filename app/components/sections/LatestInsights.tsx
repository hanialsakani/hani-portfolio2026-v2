import Link from "next/link";
import Sparkline from "@/app/components/ui/Sparkline";
import { TYPE_META, type Post } from "@/lib/post-types";

/** Server-rendered strip on the homepage — always shows the newest
 *  post automatically, so the site looks alive without any upkeep. */
export default function LatestInsights({ posts }: { posts: Post[] }) {
  const latest = posts[0];
  if (!latest) return null;
  const more = posts.length - 1;

  return (
    <section aria-label="Latest from Insights" className="relative z-10 -mt-10 sm:-mt-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <Link
          href={latest.hasPage ? `/insights/${latest.slug}` : "/insights"}
          className="group flex items-center gap-4 bg-surface border border-line rounded-2xl px-5 py-4 shadow-sm hover:border-chart-blue transition-colors"
        >
          <Sparkline seed={latest.slug} hue="green" width={72} height={26} />
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-[10px] tracking-[0.14em] uppercase text-chart-green mb-0.5">
              Latest from Insights · {TYPE_META[latest.type].label} ·{" "}
              {new Date(latest.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
            </span>
            <span className="block font-semibold text-sm sm:text-[15px] text-ink truncate group-hover:text-chart-blue transition-colors">
              {latest.title}
            </span>
          </span>
          <span className="hidden sm:block font-mono text-[11px] text-ink-faint whitespace-nowrap">
            {more > 0 ? `+${more} more →` : "read →"}
          </span>
        </Link>
      </div>
    </section>
  );
}
