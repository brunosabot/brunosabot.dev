import { MDXRemote } from "next-mdx-remote";
import React from "react";
import Image from "next/image";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";

interface IPostProps {
  post: any;
  source: any;
}

const Post: React.FC<IPostProps> = ({ source, post }) => {
  return (
    <div className={classes["blog-post-container"]}>
      <div className={classes["blog-post"]}>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>

        <div className={classes["blog-post-infos"]}>
          <PostAuthor
            creator={post.creator}
            date={post.date}
            timeToRead={post.timeToRead}
            canonical={post.canonical}
            canonicalName={post.platform}
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
            height={post.imageHeight}
            width="680"
            placeholder="blur"
            blurDataURL={post.imagePlaceholder}
          />
          <figcaption dangerouslySetInnerHTML={{ __html: post.imageAlt }} />
        </figure>

        <MDXRemote {...source} lazy />
      </div>
    </div>
  );
};

export default Post;
