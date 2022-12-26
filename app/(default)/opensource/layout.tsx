import React from "react";
import classes from "./index.module.css";

interface IOpensourceLayoutProps {
  children: React.ReactNode;
}

export default function OpensourceLayout({ children }: IOpensourceLayoutProps) {
  return <main className={classes.Content}>{children}</main>;
}
