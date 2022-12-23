import React from "react";
import classes from "./PostSocial.module.css";
import Svg from "../svg/Svg";
import { mdiLinkedin, mdiTwitter } from "@mdi/js";
import { TooltipPosition, withTooltip } from "../modal/withTooltip";
import { WithATooltip } from "../modal/WithATooltip";

interface IPostsProps {
  title: string;
  path: string;
}

interface ILinkWithTooltip {
  href: string;
  label: string;
  children: React.ReactNode;
}

const LinkWithTooltip = ({ href, label, children }: ILinkWithTooltip) => (
  <WithATooltip label={label}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={classes["blog-post-social-item"]}
    >
      {children}
    </a>
  </WithATooltip>
);

const Posts: React.FC<IPostsProps> = ({ title, path }) => {
  const encodedUrl = encodeURI(`https://brunosabot.dev${path}`);
  const encodedTitle = encodeURI(`${title} by @brunosabot`);

  return (
    <>
      <div className={classes["blog-post-social"]}>
        <LinkWithTooltip
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          label="Share the article on Twitter"
        >
          <Svg d={mdiTwitter} className="icon-twitter" />
        </LinkWithTooltip>
        <LinkWithTooltip
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&source=brunosabot.dev`}
          label="Share the article on LinkedIn"
        >
          <Svg d={mdiLinkedin} className="icon-linkedin" />
        </LinkWithTooltip>
      </div>
    </>
  );
};

export default Posts;
