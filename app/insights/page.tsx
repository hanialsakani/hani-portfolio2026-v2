import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeedList from "@/app/insights/FeedList";
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description: `Notes, articles and a chart every week — ${SITE.name}'s data diary on business analysis and analytics.`,
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <header className="mb-8">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-chart-green mb-2">
              The data diary · updated whenever
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-ink mb-3">
              Insights
            </h1>
            <p className="text-ink-soft max-w-[52ch]">
              Notes, articles and charts on business analysis, dashboards and
              the London data scene — the things I&apos;d post on LinkedIn,
              living where they can&apos;t expire.{" "}
              <a href="/rss.xml" className="text-chart-blue hover:underline">
                Follow via RSS
              </a>
              .
            </p>
          </header>

          <FeedList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
