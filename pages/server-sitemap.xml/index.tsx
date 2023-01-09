import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getNotionPosts } from "../../lib/notion";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getNotionPosts();

  const fields = posts.map((post) => {
    return {
      loc: process.env.NEXT_PUBLIC_URL + post.path,
      lastmod: post.lastModified,
      changefred: "monthly",
      prioity: 0.7,
    };
  });

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
