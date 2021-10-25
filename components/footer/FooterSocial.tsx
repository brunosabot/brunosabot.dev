import React from "react";
import classes from "./FooterSocial.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  name: string;
}

const FooterSocial: React.FC<Props> = ({ children, href, name }) => (
  <a
    className={classes["footer-social"]}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    aria-label={`Bruno Sabot on ${name}`}
  >
    {children}
  </a>
);

export default FooterSocial;
