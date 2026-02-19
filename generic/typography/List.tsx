import { ReactNode } from "react";

import classNames from "./List.module.css";

interface IListProps {
  children: ReactNode;
}

export default function List({ children }: IListProps) {
  return <ul className={classNames.List}>{children}</ul>;
}
