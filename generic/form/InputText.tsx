import { InputHTMLAttributes } from "react";
import classNames from "./InputText.module.css";

type IInputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputText({
  label,
  className,
  name,
  value,
  ...props
}: IInputTextProps) {
  const classList = [classNames.Input];
  if (className) classList.push(className);
  if (value) classList.push(classNames.HasValue);

  return (
    <label htmlFor={name} className={classNames.InputText}>
      <input
        {...props}
        value={value}
        name={name}
        type="email"
        className={classList.join(" ")}
      />
      <div className={classNames.Label}>{label}</div>
    </label>
  );
}
