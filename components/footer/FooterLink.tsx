import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import OpenInNew from "../svg/IconOpenInNew";
import classes from "./FooterLink.module.css";

interface Props {
  children: React.ReactNode;
  to: string;
}

const FooterLink: React.FC<Props> = ({ children, to }) => {
  const isExternal = to.indexOf("http") === 0;

  return (
    <>
      {isExternal ? (
        <a
          className={classes["footer-link__link"]}
          href={to}
          rel="noopener noreferrer"
          target="_blank"
        >
          <OpenInNew className={classes["footer-link__external-icon"]} />
          {children}
        </a>
      ) : (
        <Link passHref href={to}>
          <a href="#" className={classes["footer-link__link"]}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};

export default FooterLink;
