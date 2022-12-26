import React from "react";
import { WithATooltip } from "../modal/WithATooltip";
import classes from "./BiographySocial.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  label: string;
}

const Social: React.FC<Props> = ({ children, href, label }) => (
  <WithATooltip label={label}>
    <a
      className={classes["biography-social"]}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={label}
    >
      {children}
    </a>
  </WithATooltip>
);

export default Social;
