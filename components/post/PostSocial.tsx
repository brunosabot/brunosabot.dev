import classes from "./PostSocial.module.css";
import Svg from "../svg/Svg";
import { mdiLinkedin } from "@mdi/js";
import { WithATooltip } from "../modal/WithATooltip";
import { SITE_METADATA } from "../../lib/metadata";
import svgX from "../svg/x";

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
  const encodedUrl = encodeURI(`${SITE_METADATA.siteUrl}${path}`);
  const encodedTitle = encodeURI(`${title} by @brunosabot`);

  return (
    <>
      <div className={classes["blog-post-social"]}>
        <LinkWithTooltip
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          label="Share the article on Twitter"
        >
          <Svg d={svgX} className="icon-x" />
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
