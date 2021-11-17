import React from "react";
import classes from "./PostSocial.module.css";
import Svg from "../svg/Svg";
import { mdiLinkedin, mdiTwitter } from "@mdi/js";

interface IPostsProps {
  title: string;
  path: string;
}

const Posts: React.FC<IPostsProps> = ({ title, path }) => {
  const encodedUrl = encodeURI(`https://brunosabot.dev${path}`);
  const encodedTitle = encodeURI(`${title} by @brunosabot`);

  return (
    <div className={classes["blog-post-social"]}>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share the article on Twitter"
        className={classes["blog-post-social-item"]}
      >
        <Svg d={mdiTwitter} className="icon-twitter" />
      </a>

      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&source=brunosabot.dev`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share the article on LinkedIn"
        className={classes["blog-post-social-item"]}
      >
        <Svg d={mdiLinkedin} className="icon-linkedin" />
      </a>
    </div>
  );
};

export default Posts;
