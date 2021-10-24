import React from "react";
import classes from "./BiographySocial.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  name: string;
}

const Social: React.FC<Props> = ({ children, href, name }) => (
  <a
    className={classes["biography-social"]}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    aria-label={`Bruno Sabot on ${name}`}
  >
    {children}
  </a>
);

export default Social;
