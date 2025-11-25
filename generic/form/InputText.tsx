import { InputHTMLAttributes } from "react";

import classNames from "./InputText.module.css";

type IInputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputText({
  className,
  label,
  name,
  value,
  ...props
}: IInputTextProps) {
  const classList = [classNames.Input];
  if (className) classList.push(className);
  if (value) classList.push(classNames.HasValue);

  return (
    <label className={classNames.InputText} htmlFor={name}>
      <input
        {...props}
        className={classList.join(" ")}
        name={name}
        type="email"
        value={value}
      />
      <div className={classNames.Label}>{label}</div>
    </label>
  );
}
