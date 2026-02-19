import { ReactNode } from "react";

import classNames from "./ListItem.module.css";

interface IListItemProps {
  children: ReactNode;
}

export default function ListItem({ children }: IListItemProps) {
  return <li className={classNames.ListItem}>{children}</li>;
}
