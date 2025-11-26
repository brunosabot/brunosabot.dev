import { LucideIcon } from "lucide-react";
import { SelectHTMLAttributes } from "react";

import classes from "./SelectWithIcon.module.css";

type ISelectWithIconProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  Icon: LucideIcon;
  label: string;
};

export default function SelectWithIcon({
  children,
  className = "",
  Icon,
  label,
  ...props
}: ISelectWithIconProps) {
  const classList = [classes.SelectWithIcon, className];

  return (
    <label className={classList.join(" ")}>
      {label}
      <div className={classes.SelectWithIconWrapper}>
        <Icon className="text-secondary" size={20} />
        <select className={classes.SelectWithIconField} {...props}>
          {children}
        </select>
      </div>
    </label>
  );
}
