import { getServerSideSitemap } from "next-sitemap";

import { getNotionPosts, getNotionTags } from "../../lib/notion-posts";

const monthly = "monthly" as const;

export async function GET() {
  const posts = await getNotionPosts();
  const tags = await getNotionTags();

  const postEntries = posts.map((post) => ({
    changefreq: monthly,
    lastmod: post.lastModified,
    loc: process.env.NEXT_PUBLIC_URL + post.path,
    priority: 0.7,
  }));

  const tagEntries = tags.map((tag) => ({
    changefreq: monthly,
    lastmod: new Date().toISOString(),
    loc: `${process.env.NEXT_PUBLIC_URL}/tags/${encodeURIComponent(tag)}`,
    priority: 0.7,
  }));

  return getServerSideSitemap([...postEntries, ...tagEntries]);
}
