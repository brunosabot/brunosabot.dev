import classes from "./index.module.css";

interface IIndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IIndexLayoutProps) {
  return <main className={classes.Content}>{children}</main>;
}
