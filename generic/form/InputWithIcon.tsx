import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

import classes from "./InputWithIcon.module.css";

type IInputWithIconProps = InputHTMLAttributes<HTMLInputElement> & {
  Icon: LucideIcon;
  label: string;
};

export default function InputWithIcon({
  Icon,
  label,
  ...props
}: IInputWithIconProps) {
  return (
    <label className={classes.Label}>
      {label}
      <div className={classes.InputWrapper}>
        <Icon className="text-secondary" size={20} />
        <input className={classes.Input} {...props} />
      </div>
    </label>
  );
}
