import React from "react";
import classes from "./index.module.css";

interface IPostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: IPostLayoutProps) {
  return <main className={classes.Content}>{children}</main>;
}
