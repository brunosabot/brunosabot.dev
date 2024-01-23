import classes from "./index.module.css";

interface IPodcastLayoutProps {
  children: React.ReactNode;
}

export default function PodcastLayout({ children }: IPodcastLayoutProps) {
  const classNames = [classes.Content, classes.ContentCols].join(" ");

  return <main className={classNames}>{children}</main>;
}
