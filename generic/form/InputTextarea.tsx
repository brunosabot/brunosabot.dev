import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import classNames from "./InputTextarea.module.css";

type IInputTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
};

export default function InputTextarea({
  label,
  className,
  name,
  value,
  ...props
}: IInputTextareaProps) {
  const classList = [classNames.Textarea];
  if (className) classList.push(className);
  if (value) classList.push(classNames.HasValue);

  return (
    <label htmlFor={name} className={classNames.InputTextarea}>
      <textarea
        {...props}
        value={value}
        name={name}
        className={classList.join(" ")}
      />
      <div className={classNames.Label}>{label}</div>
    </label>
  );
}
