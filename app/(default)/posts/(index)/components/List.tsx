import classes from "./List.module.css";

interface IListProps {
  children: React.ReactNode;
}

export default function List({ children }: IListProps) {
  return <div className={classes.List}>{children}</div>;
}
