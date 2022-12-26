import { getPlaiceholder } from "plaiceholder";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import { getRelatedPosts } from "../../../../../lib/posts";
import { notFound } from "next/navigation";
import MatterPost from "../../../../../types/MatterPost";
import PostDonation from "../../../../../components/post/PostDonation";
import Paypal from "../../../../../components/donate/Paypal";
import Patreon from "../../../../../components/donate/Patreon";
import BuyMeACoffee from "../../../../../components/donate/BuyMeACoffee";
import Related from "../../../../../components/post/Related";
import { RouteParams } from "./types";
import Post from "../../../../../components/post/Post";
import getMarkdown from "../../../../../lib/gist";

const POSTS_PATH = path.join(process.cwd(), "posts");

function getPosts(): MatterPost[] {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source))
    .map((matterPost) => {
      return {
        content: matterPost.content,
        data: { ...matterPost.data },
      };
    });
}

function getPost(posts: MatterPost[], year: string, slug: string) {
  return posts.find((p) => p.data.path === `/posts/${year}/${slug}/`);
}

function getReadingTime(post: MatterPost) {
  const statMarkdown = readingTime(post.content);

  return Math.round(statMarkdown.minutes);
}

async function getPlaceholderImage(post: MatterPost) {
  const imageRes = await fetch(post.data.originalImage);
  const arrayBuffer = await imageRes.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { img, base64 } = await getPlaiceholder(buffer);
  const imageHeight = (img.height * 680) / img.width;

  return { base64, height: imageHeight };
}

export async function generateStaticParams() {
  return getPosts().map((post) => {
    const year = `${new Date(post.data.date).getFullYear()}`;
    const slug = post.data.path.replace(`/posts/${year}/`, "");

    return { year, slug };
  });
}

export default async function PostPage({
  params: { year, slug },
}: RouteParams) {
  const posts = getPosts();
  const post = getPost(posts, year, slug);

  if (post === undefined) {
    notFound();
  }

  const [html, relatedPosts, { base64, height }] = await Promise.all([
    getMarkdown(post.content),
    getRelatedPosts(post, posts),
    getPlaceholderImage(post),
  ]);

  const readingTime = getReadingTime(post);

  return (
    <>
      <Post
        post={{
          ...post,
          data: { ...post.data, date: post.data.date.toString() },
        }}
        html={html}
        readingTime={readingTime}
        heroPlaceholder={base64}
        heroHeight={height}
      />
      <PostDonation>
        You liked the post? Consider donating!
        <Paypal />
        <Patreon />
        <BuyMeACoffee />
      </PostDonation>
      <Related posts={relatedPosts} />
    </>
  );
}
