import classes from "./Footer.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContent}>{children}</div>
    </footer>
  );
}
