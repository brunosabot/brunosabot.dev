import React from "react";
import classes from "./BiographyPost.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const BiographyPost: React.FC<Props> = ({ children, href }) => (
  <a className={classes["biography-post"]} href={href}>
    {children}
  </a>
);

export default BiographyPost;
