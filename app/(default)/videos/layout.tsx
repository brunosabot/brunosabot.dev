import React from "react";
import classes from "./index.module.css";

interface IVideosLayoutProps {
  children: React.ReactNode;
}

export default function VideosLayout({ children }: IVideosLayoutProps) {
  const classNames = [classes.Content, classes.ContentCols].join(" ");

  return <main className={classNames}>{children}</main>;
}
