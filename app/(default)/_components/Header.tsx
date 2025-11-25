import classes from "./Header.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return <header className={classes.Header}>{children}</header>;
}
