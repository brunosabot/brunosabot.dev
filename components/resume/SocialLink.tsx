import Link from "next/link";

import classes from "./SocialLink.module.css";

interface Props {
  children: React.ReactNode;
  to: string;
}

const SocialLink: React.FC<Props> = ({ children, to }) => {
  const isExternal = to.indexOf("http") === 0;

  return (
    <span className={classes["resume-social-link__warpper"]}>
      {isExternal ? (
        <a
          className={classes["resume-social-link"]}
          href={to}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <Link className={classes["resume-social-link"]} href={to}>
          {children}
        </Link>
      )}
    </span>
  );
};

export default SocialLink;
