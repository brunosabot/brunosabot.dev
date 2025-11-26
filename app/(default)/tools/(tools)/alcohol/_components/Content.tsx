import classes from "./Content.module.css";

interface IContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: IContentProps) {
  return <main className={classes.Content}>{children}</main>;
}
