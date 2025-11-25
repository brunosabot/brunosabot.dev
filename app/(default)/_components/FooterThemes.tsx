import classes from "./FooterThemes.module.css";

interface IFooterThemesProps {
  children: React.ReactNode;
}

export default function FooterThemes({ children }: IFooterThemesProps) {
  return <div className={classes.FooterThemes}>{children}</div>;
}
