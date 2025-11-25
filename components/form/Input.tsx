import React from "react";

import classes from "./Input.module.css";

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  const { className, ...rest } = props;
  const classNames = className
    ? `${classes.Input} ${className}`
    : classes.Input;
  return <input {...rest} className={classNames} />;
};

export default Input;
