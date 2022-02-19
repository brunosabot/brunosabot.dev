import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import { getPlaiceholder } from "plaiceholder";
import Head from "next/head";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import React from "react";
import readingTime from "reading-time";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import Post from "../../../components/post/Post";
import gist from "../../../lib/gist";
import { GetStaticProps } from "next";
import SEO from "../../../components/Seo";
import Paypal from "../../../components/donate/Paypal";
import PostDonation from "../../../components/post/PostDonation";
import Patreon from "../../../components/donate/Patreon";
import BuyMeACoffee from "../../../components/donate/BuyMeACoffee";
import Related from "../../../components/post/Related";
import { getRelatedPosts, RelatedPost } from "../../../lib/posts";

const POSTS_PATH = path.join(process.cwd(), "posts");

const components = {};

export { getPaths as getStaticPaths } from "../../../components/pages/posts/[year]/[slug]";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (
    params === undefined ||
    params.year === undefined ||
    params.slug === undefined
  ) {
    return { notFound: true };
  }

  const posts = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source));

  const post = posts.find(
    (post) => post.data.path === `/posts/${params?.year}/${params?.slug}`
  );

  if (post === undefined) {
    return { notFound: true };
  }

  const relatedPosts = getRelatedPosts(
    posts,
    `/posts/${params?.year}/${params?.slug}`,
    post.data.tags
  );

  const postWithStringDate = {
    ...post,
    data: {
      ...post.data,
      date: post.data.date.toString(),
    },
  };

  const mdxSource = await serialize(postWithStringDate.content, {
    mdxOptions: {
      remarkPlugins: [gist],
      rehypePlugins: [],
    },
    scope: postWithStringDate.data,
  });

  const statCompiled = readingTime(mdxSource.compiledSource);
  const statMarkdown = readingTime(post.content);

  // Average to count gist time reading
  const timeToRead = Math.round(
    (statCompiled.minutes + statMarkdown.minutes) / 2
  );

  const imageRes = await fetch(post.data.originalImage);
  const arrayBuffer = await imageRes.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { img, base64 } = await getPlaiceholder(buffer);
  const imageHeight = (img.height * 680) / img.width;

  return {
    props: {
      source: mdxSource,
      relatedPosts,
      post: {
        creator: post.data.creator,
        canonical: post.data.canonical ?? null,
        platform: post.data.platform ?? null,
        image: post.data.originalImage,
        imageAlt: post.data.originalImageAlt ?? "",
        imagePlaceholder: base64,
        imageHeight,
        title: post.data.title,
        date: post.data.date.toString(),
        subtitle: post.data.subtitle,
        lang: post.data.lang,
        path: post.data.path,
        timeToRead,
      },
    },
  };
};

interface IPostsProps {
  post: any;
  source: any;
  relatedPosts: RelatedPost[];
}

const Posts: React.FC<IPostsProps> = ({ source, relatedPosts = [], post }) => {
  return (
    <MDXProvider components={components}>
      <SEO
        title={post.title}
        description={post.subtitle}
        image={post.image}
        url={"https://brunosabot.dev/" + post.path}
      />
      <DefaultLayout>
        {post.canonical ? (
          <Head>
            <link rel="canonical" href={post.canonical} />
          </Head>
        ) : null}
        <Post post={post} source={source} />
        <PostDonation>
          You liked the post? Consider donating!
          <Paypal />
          <Patreon />
          <BuyMeACoffee />
        </PostDonation>
        <Related posts={relatedPosts} />
      </DefaultLayout>
    </MDXProvider>
  );
};

export default Posts;
