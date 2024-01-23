"use client";

import Link from "next/link";
import classes from "./HeaderLink.module.css";
import { mdiOpenInNew } from "@mdi/js";
import Svg from "../svg/Svg";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  to: string;
}

const HeaderLink: React.FC<Props> = ({ children, to }) => {
  const path = usePathname();
  const isExternal = to.indexOf("http") === 0;
  const isActive = path === to;
  const classNames = [classes.HeaderLink];

  if (isActive) {
    classNames.push(classes.Active);
  }

  if (isExternal) {
    return (
      <a
        className={classNames.join(" ")}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Svg d={mdiOpenInNew} className={classes.ExternalIcon} />
        {children}
      </a>
    );
  }

  return (
    <Link href={to} className={classNames.join(" ")}>
      {children}
    </Link>
  );
};

export default HeaderLink;
