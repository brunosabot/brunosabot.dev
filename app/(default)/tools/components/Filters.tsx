import classes from "./Filters.module.css";

interface IFiltersProps {
  children: React.ReactNode;
}

export default function Filters({ children }: IFiltersProps) {
  return <main className={classes.Filters}>{children}</main>;
}
