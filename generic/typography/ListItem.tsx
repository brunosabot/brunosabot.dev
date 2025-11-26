import classNames from "./ListItem.module.css";

interface IListItemProps {
  children: React.ReactNode;
}

export default function ListItem({ children }: IListItemProps) {
  return <li className={classNames.ListItem}>{children}</li>;
}
