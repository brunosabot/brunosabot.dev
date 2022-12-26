import React from "react";
import classes from "./index.module.css";

interface IProjectsLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: IProjectsLayoutProps) {
  const classNames = [classes.Content, classes.ContentCols].join(" ");

  return <main className={classNames}>{children}</main>;
}
