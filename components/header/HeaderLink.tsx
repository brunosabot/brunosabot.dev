import Link from "next/link";
import React from "react";
import classes from "./HeaderLink.module.css";
import { mdiOpenInNew } from "@mdi/js";
import Svg from "../svg/Svg";

interface Props {
  children: React.ReactNode;
  current: string | null;
  to: string;
}

const HeaderLink: React.FC<Props> = ({ current, children, to }) => {
  const activeClassName =
    current === to ? classes["header-link__link--active"] : "";
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
          <Svg
            d={mdiOpenInNew}
            className={classes["header-link__external-icon"]}
          />
          {children}
        </a>
      ) : (
        <Link
          href={to}
          className={classes["header-link__link"] + " " + activeClassName}
        >
          {children}
        </Link>
      )}
    </span>
  );
};

export default HeaderLink;
