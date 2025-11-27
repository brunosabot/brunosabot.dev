import classes from "./HeaderLinks.module.css";

interface IHeaderLinksProps {
  children: React.ReactNode;
}

export default function HeaderLinks({ children }: IHeaderLinksProps) {
  return (
    <nav className={classes.HeaderLinks}>
      <div className={classes.HeaderLinksContent}>{children}</div>
    </nav>
  );
}
