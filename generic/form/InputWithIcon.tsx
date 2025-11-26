import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

import classes from "./InputWithIcon.module.css";

type IInputWithIconProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  Icon: LucideIcon;
  label: string;
};

export default function InputWithIcon({
  className = "",
  Icon,
  label,
  ...props
}: IInputWithIconProps) {
  const classList = [classes.InputWithIcon, className];

  return (
    <label className={classList.join(" ")}>
      {label}
      <div className={classes.InputWithIconWrapper}>
        <Icon className="text-secondary" size={20} />
        <input className={classes.InputWithIconField} {...props} />
      </div>
    </label>
  );
}
