import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Card from "../../../../components/card/Card";
import PageTitle from "../../../../components/typography/PageTitle";

const POSTS_PATH = path.join(process.cwd(), "posts");

const getPosts = async () => {
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
      color: post.data.color,
    }));

  return Promise.all(postPromises);
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageTitle>Post list</PageTitle>
      {posts.map((post, index) => (
        <Card
          image={post.image}
          color={post.color}
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
    </>
  );
}
