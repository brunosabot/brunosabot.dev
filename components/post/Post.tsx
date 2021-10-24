import { MDXRemote } from "next-mdx-remote";
import React from "react";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";

const components = {};

interface IPostProps {
  post: any;
  source: any;
}

const Post: React.FC<IPostProps> = ({ source, post }) => {
  const timeToRead = 0;

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
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
};

export default Post;
