import { MDXRemote } from "next-mdx-remote";
import React from "react";
import Image from "next/image";
import readingTime from "reading-time";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";

const components = {
  img: (props: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={props.src} alt={props.alt} loading="lazy" />
  ),
};

interface IPostProps {
  post: any;
  source: any;
}

const Post: React.FC<IPostProps> = ({ source, post }) => {
  const statCompiled = readingTime(source.compiledSource);
  const statMarkdown = readingTime(post.content);

  // Average to count gist time reading
  const timeToRead = Math.round(
    (statCompiled.minutes + statMarkdown.minutes) / 2
  );

  return (
    <div className={classes["blog-post-container"]}>
      <div className={classes["blog-post"]}>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>

        <div className={classes["blog-post-infos"]}>
          <PostAuthor
            creator={post.creator}
            date={post.date}
            timeToRead={timeToRead}
          />
          <PostSocial title={post.title} path={post.path} />
        </div>

        <figure>
          <Image
            priority
            src={post.image}
            alt={post.imageAlt.replace(/<[^>]*>/g, "")}
            layout="responsive"
            objectFit="cover"
            height="408"
            width="680"
          />
          <figcaption dangerouslySetInnerHTML={{ __html: post.imageAlt }} />
        </figure>

        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
};

export default Post;
