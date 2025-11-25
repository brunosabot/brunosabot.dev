import classes from "./SectionTitle.module.css";

interface ISectionTitleProps {
  children: string;
}

export default function SectionTitle({ children }: ISectionTitleProps) {
  return <h2 className={classes.SectionTitle}>{children}</h2>;
}
