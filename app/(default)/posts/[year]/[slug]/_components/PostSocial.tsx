import { SITE_METADATA } from "../../../../../../lib/metadata";
import classes from "./PostSocial.module.css";

interface ILinkWithTooltip {
  children: React.ReactNode;
  href: string;
}

interface IPostsProps {
  path: string;
  title: string;
}

const Link = ({ children, href }: ILinkWithTooltip) => (
  <a
    className={classes.BlogPostSocialLink}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

const Posts: React.FC<IPostsProps> = ({ path, title }) => {
  const encodedUrl = encodeURI(`${SITE_METADATA.siteUrl}${path}`);
  const encodedTitle = encodeURI(`${title} by @brunosabot`);

  return (
    <>
      <div className={classes.BlogPostSocial}>
        <Link
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        >
          Share on X
        </Link>
        <Link
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&source=brunosabot.dev`}
        >
          Share on LinkedIn
        </Link>
      </div>
    </>
  );
};

export default Posts;
