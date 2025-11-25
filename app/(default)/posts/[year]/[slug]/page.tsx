import { mdiLinkVariant } from "@mdi/js";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

import BuyMeACoffee from "../../../../../components/donate/BuyMeACoffee";
import Patreon from "../../../../../components/donate/Patreon";
import Paypal from "../../../../../components/donate/Paypal";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import getMarkdown from "../../../../../lib/markdown";
import { getMetaData, SITE_METADATA } from "../../../../../lib/metadata";
import { FullPost } from "../../../../../lib/notion";
import { getNotionPost, getNotionPosts } from "../../../../../lib/notion-posts";
import { getRelatedPosts } from "../../../../../lib/posts";
import { getPost, getPosts } from "../../../../actions/posts";
import PostComponent from "./_components/Post";
import PostDonation from "./_components/PostDonation";
import Related from "./_components/Related";

type Params = Promise<{ slug: string; year: string }>;

export const revalidate = 21600;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, year } = await params;

  const post = await getNotionPost(`/posts/${year}/${slug}/`);

  if (post === undefined) {
    return null;
  }

  return getMetaData(
    {
      canonical: post.data.canonical,
      description: post.data.subtitle,
      image: post.data.originalImage,
      title: post.data.title,
      url: `${SITE_METADATA.siteUrl}${post.data.path}`,
    },
    `/posts/${year}/${slug}/`,
  );
}

export async function generateStaticParams() {
  const posts = await getNotionPosts();

  return posts.map((post) => {
    const year = `${new Date(post.date).getFullYear()}`;
    const slug = post.path.replace(`/posts/${year}/`, "").replace(/\/$/, "");

    return { slug, year };
  });
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug, year } = await params;

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
      <svg style={{ display: "none" }} viewBox="0 0 24 24">
        <path d={mdiLinkVariant} id="linkVariant" />
      </svg>
      <PostComponent
        html={html}
        post={{
          ...post,
          data: { ...post.data, date: post.data.date.toString() },
        }}
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

function getReadingTime(post: FullPost) {
  const statMarkdown = readingTime(post.content);

  return Math.round(statMarkdown.minutes);
}
