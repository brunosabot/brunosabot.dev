import { InputHTMLAttributes } from "react";

import classNames from "./InputEmail.module.css";

type IInputEmailProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputEmail({
  className,
  label,
  name,
  value,
  ...props
}: IInputEmailProps) {
  const classList = [classNames.Input];
  if (className) classList.push(className);
  if (value) classList.push(classNames.HasValue);

  return (
    <label className={classNames.InputEmail} htmlFor={name}>
      <input
        {...props}
        className={classList.join(" ")}
        name={name}
        type="text"
        value={value}
      />
      <div className={classNames.Label}>{label}</div>
    </label>
  );
}
