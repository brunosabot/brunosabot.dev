import React from "react";
import classes from "./Input.module.css";

interface IInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
}

const Input: React.FC<IInputProps> = (props) => {
  return <input className={classes.Input} {...props} />;
};

export default Input;
