import { mdiLinkedin } from "@mdi/js";

import { SITE_METADATA } from "../../lib/metadata";
import { WithATooltip } from "../modal/WithATooltip";
import Svg from "../svg/Svg";
import svgX from "../svg/x";
import classes from "./PostSocial.module.css";

interface ILinkWithTooltip {
  children: React.ReactNode;
  href: string;
  label: string;
}

interface IPostsProps {
  path: string;
  title: string;
}

const LinkWithTooltip = ({ children, href, label }: ILinkWithTooltip) => (
  <WithATooltip label={label}>
    <a
      aria-label={label}
      className={classes["blog-post-social-item"]}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  </WithATooltip>
);

const Posts: React.FC<IPostsProps> = ({ path, title }) => {
  const encodedUrl = encodeURI(`${SITE_METADATA.siteUrl}${path}`);
  const encodedTitle = encodeURI(`${title} by @brunosabot`);

  return (
    <>
      <div className={classes["blog-post-social"]}>
        <LinkWithTooltip
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          label="Share the article on Twitter"
        >
          <Svg className="icon-x" d={svgX} />
        </LinkWithTooltip>
        <LinkWithTooltip
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&source=brunosabot.dev`}
          label="Share the article on LinkedIn"
        >
          <Svg className="icon-linkedin" d={mdiLinkedin} />
        </LinkWithTooltip>
      </div>
    </>
  );
};

export default Posts;
