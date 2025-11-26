import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

import classes from "./CheckboxWithIcon.module.css";

type ICheckboxWithIconProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  Icon: LucideIcon;
  label: string;
};

export default function CheckboxWithIcon({
  className = "",
  Icon,
  label,
  ...props
}: ICheckboxWithIconProps) {
  const classList = [classes.CheckboxWithIcon, className];

  return (
    <label className={classList.join(" ")}>
      {label}
      <div className={classes.CheckboxWithIconWrapper}>
        <Icon className="text-secondary" size={20} />
        <input
          className={classes.CheckboxWithIconField}
          type="checkbox"
          {...props}
        />
      </div>
    </label>
  );
}
