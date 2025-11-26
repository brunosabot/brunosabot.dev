import { LucideIcon } from "lucide-react";

import classes from "./Filter.module.css";

interface IFilterProps {
  active: boolean;
  children: React.ReactNode;
  Icon: LucideIcon;
  onClick: () => void;
}

export default function Filter({
  active,
  children,
  Icon,
  onClick,
}: IFilterProps) {
  return (
    <button
      className={`${classes.Filter} ${active ? classes.Active : ""}`}
      onClick={onClick}
      type="button"
    >
      <Icon size={16} strokeWidth={2} />
      {children}
    </button>
  );
}
