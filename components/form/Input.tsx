import React from "react";
import classes from "./Input.module.css";

interface InputPropsCheckbox {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  "aria-invalid"?: boolean;
  type: "checkbox";
  checked: boolean;
}

interface InputPropsText {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
}

type IInputProps = InputPropsText | InputPropsCheckbox;

const Input: React.FC<IInputProps> = (props) => {
  if ("type" in props) {
    return <input {...props} type={props.type} className={classes.Input} />;
  }

  return <input {...props} className={classes.Input} />;
};

export default Input;
