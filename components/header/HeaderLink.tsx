import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import OpenInNew from "../svg/IconOpenInNew";
import classes from "./HeaderLink.module.css";

interface Props {
  children: React.ReactNode;
  to: string;
}

const HeaderLink: React.FC<Props> = ({ children, to }) => {
  const { asPath } = useRouter();
  const activeClassName =
    asPath === to ? classes["header-link__link--active"] : "";
  const isExternal = to.indexOf("http") === 0;

  return (
    <span className={classes["header-link"]}>
      {isExternal ? (
        <a
          className={classes["header-link__link"]}
          href={to}
          rel="noopener noreferrer"
          target="_blank"
        >
          <OpenInNew className={classes["header-link__external-icon"]} />
          {children}
        </a>
      ) : (
        <Link passHref href={to}>
          <a
            href="#"
            className={classes["header-link__link"] + " " + activeClassName}
          >
            {children}
          </a>
        </Link>
      )}
    </span>
  );
};

export default HeaderLink;
