import readingTime from "reading-time";
import { getRelatedPosts } from "../../../../../lib/posts";
import { notFound } from "next/navigation";
import PostDonation from "../../../../../components/post/PostDonation";
import Paypal from "../../../../../components/donate/Paypal";
import Patreon from "../../../../../components/donate/Patreon";
import BuyMeACoffee from "../../../../../components/donate/BuyMeACoffee";
import Related from "../../../../../components/post/Related";
import { RouteParams } from "./types";
import Post from "../../../../../components/post/Post";
import getMarkdown from "../../../../../lib/gist";
import { mdiLinkVariant } from "@mdi/js";
import {
  getNotionPosts,
  getNotionPost,
  FullPost,
} from "../../../../../lib/notion";

function getReadingTime(post: FullPost) {
  const statMarkdown = readingTime(post.content);

  return Math.round(statMarkdown.minutes);
}

export async function generateStaticParams() {
  const posts = await getNotionPosts();

  return posts.map((post) => {
    const year = `${new Date(post.date).getFullYear()}`;
    const slug = post.path.replace(`/posts/${year}/`, "").replace(/\/$/, "");

    return { year, slug };
  });
}

export default async function PostPage({
  params: { year, slug },
}: RouteParams) {
  const [posts, post] = await Promise.all([
    getNotionPosts(),
    getNotionPost(`/posts/${year}/${slug}/`),
  ]);

  if (post === undefined) {
    notFound();
  }

  const [html, relatedPosts] = await Promise.all([
    getMarkdown(post.content),
    getRelatedPosts(post, posts),
  ]);

  const readingTime = getReadingTime(post);

  return (
    <>
      <svg viewBox="0 0 24 24" style={{ display: "none" }}>
        <path id="linkVariant" d={mdiLinkVariant} />
      </svg>
      <Post
        post={{
          ...post,
          data: { ...post.data, date: post.data.date.toString() },
        }}
        html={html}
        readingTime={readingTime}
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
