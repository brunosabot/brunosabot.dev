import classes from "./index.module.css";

interface ITalksLayoutProps {
  children: React.ReactNode;
}

export default function TalksLayout({ children }: ITalksLayoutProps) {
  const classNames = [classes.Content, classes.ContentCols].join(" ");

  return <main className={classNames}>{children}</main>;
}
