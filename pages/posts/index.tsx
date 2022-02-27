import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { getPlaiceholder } from "plaiceholder";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import React from "react";
import Card from "../../components/card/Card";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import { MarkdownProvider } from "../../lib/markdown";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getStaticProps = async () => {
  const postPromises = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source))
    .sort((a, b) => b.data.date - a.data.date)
    .map((post) => ({
      image: post.data.originalImage,
      title: post.data.title,
      date: post.data.date.toString(),
      subtitle: post.data.subtitle,
      platform: post.data.platform,
      lang: post.data.lang,
      path: post.data.path,
    }))
    .map(async (post) => {
      const imageRes = await fetch(post.image);
      const arrayBuffer = await imageRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { img, base64 } = await getPlaiceholder(buffer);
      const imageHeight = (img.height * 680) / img.width;

      return {
        ...post,
        imagePlaceholder: base64,
        imageHeight,
      };
    });

  const posts = await Promise.all(postPromises);

  return { props: { posts } };
};

interface IPostsProps {
  posts: any[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => (
  <MarkdownProvider>
    <DefaultLayout type="columns">
      <SEO
        description="All posts publicated by Bruno Sabot on various plateforms. Check it out!"
        title="Posts"
      />
      <PageTitle>Post list</PageTitle>
      {posts.map((post, index) => (
        <Card
          image={post.image}
          imagePlaceholder={post.imagePlaceholder}
          description={post.subtitle}
          icon={post.lang}
          title={post.title}
          subtitle={post.platform}
          date={formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          to={post.path}
          key={post.path}
          priority={index === 0}
        />
      ))}
    </DefaultLayout>
  </MarkdownProvider>
);

export default Posts;
