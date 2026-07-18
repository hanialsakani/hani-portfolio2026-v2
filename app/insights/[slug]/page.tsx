import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShareRow from "@/app/insights/[slug]/ShareRow";
import { getAllPosts, getPost, TYPE_META } from "@/lib/posts";
import { SITE, SITE_URL } from "@/content/site";

export function generateStaticParams() {
  return getAllPosts()
    .filter((p) => p.hasPage)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/insights/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [SITE.name],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.hasPage) notFound();

  const url = `${SITE_URL}/insights/${post.slug}`;
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: SITE.name, url: SITE_URL },
    url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-14 min-h-screen">
        <article className="max-w-2xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <Link
            href="/insights"
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-faint hover:text-chart-blue transition-colors"
          >
            ← All insights
          </Link>

          <header className="mt-6 mb-8">
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint mb-3">
              <span className="border border-chart-blue/40 text-chart-blue rounded-full px-2 py-0.5">
                {TYPE_META[post.type].label}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-[2.6rem] leading-[1.1] tracking-tight text-ink [text-wrap:balance]">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <p className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] text-ink-faint bg-grid rounded-full px-2.5 py-0.5">
                    #{t}
                  </span>
                ))}
              </p>
            )}
          </header>

          <div className="prose-post text-[15px]" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="mt-10 pt-6 border-t border-line">
            <ShareRow url={url} title={post.title} />
          </div>

          {/* Author card — turns readers into contacts */}
          <div className="mt-8 flex items-center gap-4 bg-surface border border-line rounded-2xl p-5">
            <Image
              src="/profile.webp"
              alt={`Portrait of ${SITE.name}`}
              width={56}
              height={56}
              className="rounded-full w-14 h-14 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-display font-bold text-ink text-sm">{SITE.name}</p>
              <p className="text-ink-soft text-[13px]">
                {SITE.role} in London — {SITE.availability.toLowerCase()}.
              </p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 px-4 py-2 bg-chart-blue text-white font-semibold text-[13px] rounded-xl hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>

          {related.length > 0 && (
            <aside className="mt-10">
              <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-faint mb-3">
                Read next
              </h2>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={r.hasPage ? `/insights/${r.slug}` : "/insights"}
                      className="block bg-surface border border-line rounded-xl px-4 py-3 text-sm font-medium text-ink hover:border-chart-blue hover:text-chart-blue transition-colors"
                    >
                      {r.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
