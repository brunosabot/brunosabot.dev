import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import React from "react";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import Post from "../../../components/post/Post";
import gist from "../../../lib/gist";
import { GetStaticProps } from "next";
import SEO from "../../../components/Seo";

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

  const post = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source))
    .find(
      (post) => post.data.path === `/posts/${params?.year}/${params?.slug}`
    );

  if (post === undefined) {
    return { notFound: true };
  }

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

  return {
    props: {
      source: mdxSource,
      post: {
        content: post.content,
        creator: post.data.creator,
        canonical: post.data.canonical ?? null,
        image: post.data.originalImage,
        title: post.data.title,
        date: post.data.date.toString(),
        subtitle: post.data.subtitle,
        platform: post.data.platform,
        lang: post.data.lang,
        path: post.data.path,
      },
    },
  };
};

interface IPostsProps {
  post: any;
  source: any;
}

const Posts: React.FC<IPostsProps> = ({ source, post }) => {
  return (
    <MDXProvider components={components}>
      <SEO
        title={post.title}
        description={post.subtitle}
        image={post.image}
        url={"https://brunosabot.dev/" + post.path}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
        />
      </Head>
      <DefaultLayout>
        {post.canonical ? (
          <Head>
            <link rel="canonical" href={post.canonical} />
          </Head>
        ) : null}
        <Post post={post} source={source} />
      </DefaultLayout>
    </MDXProvider>
  );
};

export default Posts;
