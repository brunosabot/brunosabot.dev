import Link from "next/link";
import React from "react";
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
          target="_blank"
          rel="noopener noreferrer"
          href={to}
        >
          {children}
        </a>
      ) : (
        <Link passHref href={to}>
          <a className={classes["resume-social-link"]}>{children}</a>
        </Link>
      )}
    </span>
  );
};

export default SocialLink;
