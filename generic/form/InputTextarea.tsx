import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

import classNames from "./InputTextarea.module.css";

type IInputTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
};

export default function InputTextarea({
  className,
  label,
  name,
  value,
  ...props
}: IInputTextareaProps) {
  const classList = [classNames.Textarea];
  if (className) classList.push(className);
  if (value) classList.push(classNames.HasValue);

  return (
    <label className={classNames.InputTextarea} htmlFor={name}>
      <textarea
        {...props}
        className={classList.join(" ")}
        name={name}
        value={value}
      />
      <div className={classNames.Label}>{label}</div>
    </label>
  );
}
