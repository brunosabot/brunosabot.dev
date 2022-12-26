import React from "react";
import classes from "./index.module.css";

interface IToolsLayoutProps {
  children: React.ReactNode;
}

export default function ToolsLayout({ children }: IToolsLayoutProps) {
  const classNames = [classes.Content, classes.ContentShort].join(" ");

  return <main className={classNames}>{children}</main>;
}
