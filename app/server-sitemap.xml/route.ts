import { getServerSideSitemap } from "next-sitemap";
import { getNotionPosts } from "../../lib/notion";

export async function GET() {
  const posts = await getNotionPosts();

  const fields = posts.map((post) => {
    return {
      loc: process.env.NEXT_PUBLIC_URL + post.path,
      lastmod: post.lastModified,
      changefred: "monthly",
      prioity: 0.7,
    };
  });
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemap(fields);
}
