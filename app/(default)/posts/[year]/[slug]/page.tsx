import readingTime from "reading-time";
import { getRelatedPosts } from "../../../../../lib/posts";
import { notFound } from "next/navigation";
import PostDonation from "../../../../../components/post/PostDonation";
import Paypal from "../../../../../components/donate/Paypal";
import Patreon from "../../../../../components/donate/Patreon";
import BuyMeACoffee from "../../../../../components/donate/BuyMeACoffee";
import Related from "../../../../../components/post/Related";
import { RouteParams } from "./types";
import PostComponent from "../../../../../components/post/Post";
import getMarkdown from "../../../../../lib/markdown";
import { mdiLinkVariant } from "@mdi/js";
import { getNotionPosts, getNotionPost } from "../../../../../lib/notion-posts";
import { getMetaData, SITE_METADATA } from "../../../../../lib/metadata";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import { getPost, getPosts } from "../../../../actions/posts";
import { FullPost } from "../../../../../lib/notion";

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

export async function generateMetadata({
  params: { year, slug },
}: RouteParams) {
  const post = await getNotionPost(`/posts/${year}/${slug}/`);

  if (post === undefined) {
    return null;
  }

  return getMetaData(
    {
      title: post.data.title,
      description: post.data.subtitle,
      canonical: post.data.canonical,
      url: `${SITE_METADATA.siteUrl}${post.data.path}`,
      image: post.data.originalImage,
    },
    `/posts/${year}/${slug}/`,
  );
}

export default async function PostPage({
  params: { year, slug },
}: RouteParams) {
  const posts = await getPosts();
  const post = await getPost(year, slug);

  if (post === undefined) {
    notFound();
  }

  const html = await getMarkdown(post.content);
  const relatedPosts = getRelatedPosts(post, posts);
  const readingTime = getReadingTime(post);

  return (
    <>
      <svg viewBox="0 0 24 24" style={{ display: "none" }}>
        <path id="linkVariant" d={mdiLinkVariant} />
      </svg>
      <PostComponent
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

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Posts", "/posts/"],
          [post.data.title, post.data.path],
        ]}
      />
    </>
  );
}
