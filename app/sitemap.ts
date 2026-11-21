import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const articles = posts
    .filter((p) => p.hasPage)
    .map((p) => ({
      url: `${SITE_URL}/insights/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...(posts.length > 0
      ? [
          {
            url: `${SITE_URL}/insights`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
        ]
      : []),
    ...articles,
  ];
}
