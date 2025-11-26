import classes from "./Content.module.css";

interface IContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: IContentProps) {
  return <div className={classes.Content}>{children}</div>;
}
