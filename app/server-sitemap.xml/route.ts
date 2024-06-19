import { getServerSideSitemap } from "next-sitemap";
import { getNotionPosts, getNotionTags } from "../../lib/notion";

const monthly = "monthly" as const;

export async function GET() {
  const posts = await getNotionPosts();
  const tags = await getNotionTags();

  const postEntries = posts.map((post) => ({
    loc: process.env.NEXT_PUBLIC_URL + post.path,
    lastmod: post.lastModified,
    changefreq: monthly,
    priority: 0.7,
  }));

  const tagEntries = tags.map((tag) => ({
    loc: `${process.env.NEXT_PUBLIC_URL}/tags/${encodeURIComponent(tag)}`,
    lastmod: new Date().toISOString(),
    changefreq: monthly,
    priority: 0.7,
  }));

  return getServerSideSitemap([...postEntries, ...tagEntries]);
}
