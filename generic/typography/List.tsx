import classNames from "./List.module.css";

interface IListProps {
  children: React.ReactNode;
}

export default function List({ children }: IListProps) {
  return <ul className={classNames.List}>{children}</ul>;
}
