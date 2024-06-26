import classes from "./index.module.css";

interface ITagsLayoutProps {
  children: React.ReactNode;
}

export default function TagsLayout({ children }: ITagsLayoutProps) {
  return <main className={classes.Content}>{children}</main>;
}
