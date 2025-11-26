import { LucideIcon } from "lucide-react";
import { TextareaHTMLAttributes } from "react";

import classes from "./TextareaWithIcon.module.css";

type ITextareaWithIconProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  Icon: LucideIcon;
  label: string;
};

export default function TextareaWithIcon({
  Icon,
  label,
  ...props
}: ITextareaWithIconProps) {
  return (
    <label className={classes.Label}>
      {label}
      <div className={classes.InputWrapper}>
        <Icon className="text-secondary" size={20} />
        <textarea className={classes.Input} {...props} />
      </div>
    </label>
  );
}
