import { getServerSideSitemap } from "next-sitemap";
import { getNotionPosts } from "../../lib/notion";

const monthly = "monthly" as const;

export async function GET() {
  const posts = await getNotionPosts();

  const fields = posts.map((post) => {
    return {
      loc: process.env.NEXT_PUBLIC_URL + post.path,
      lastmod: post.lastModified,
      changefreq: monthly,
      prioity: 0.7,
    };
  });

  return getServerSideSitemap(fields);
}
