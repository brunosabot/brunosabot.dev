import Link from "next/link";
import React from "react";
import classes from "./FooterLink.module.css";
import { mdiOpenInNew } from "@mdi/js";
import Svg from "../svg/Svg";

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
          <Svg
            d={mdiOpenInNew}
            className={classes["footer-link__external-icon"]}
          />
          {children}
        </a>
      ) : (
        <Link href={to} className={classes["footer-link__link"]}>
          {children}
        </Link>
      )}
    </>
  );
};

export default FooterLink;
