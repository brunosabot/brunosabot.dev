import React from "react";
import classes from "./Input.module.css";

interface InputPropsCheckbox {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  "aria-invalid"?: boolean;
  type: "checkbox";
  checked: boolean;
  className?: string;
}

interface InputPropsText {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
  autoFocus?: boolean;
  className?: string;
}

interface InputPropsNumber {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
  autoFocus?: boolean;
  className?: string;
  type: "number";
}

type IInputProps = InputPropsText | InputPropsCheckbox | InputPropsNumber;

const Input: React.FC<IInputProps> = (props) => {
  const classNames = props.className
    ? `${props.className} ${classes.Input}`
    : classes.Input;

  if ("type" in props) {
    return <input {...props} type={props.type} className={classNames} />;
  }

  return <input {...props} className={classNames} />;
};

export default Input;
