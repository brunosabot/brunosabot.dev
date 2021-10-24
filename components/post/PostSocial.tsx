import React from "react";
import IconTwitter from "../svg/IconTwitter";
import IconLinkedinBox from "../svg/IconLinkedinBox";
import classes from "./PostSocial.module.css";

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
      >
        <IconTwitter className="icon-twitter" />
      </a>

      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&source=brunosabot.dev`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkedinBox className="icon-linkedin" />
      </a>
    </div>
  );
};

export default Posts;
