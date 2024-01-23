import classes from "./index.module.css";

interface IPostsLayoutProps {
  children: React.ReactNode;
}

export default function PostsLayout({ children }: IPostsLayoutProps) {
  const classNames = [classes.Content, classes.ContentCols].join(" ");

  return <main className={classNames}>{children}</main>;
}
