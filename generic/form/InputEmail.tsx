import { InputHTMLAttributes } from "react";
import classNames from "./InputEmail.module.css";

type IInputEmailProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputEmail({
  label,
  className,
  name,
  value,
  ...props
}: IInputEmailProps) {
  const classList = [classNames.Input];
  if (className) classList.push(className);
  if (value) classList.push(classNames.HasValue);

  return (
    <label htmlFor={name} className={classNames.InputEmail}>
      <input
        {...props}
        value={value}
        name={name}
        type="text"
        className={classList.join(" ")}
      />
      <div className={classNames.Label}>{label}</div>
    </label>
  );
}
