import React from "react";
import classes from "./Button.module.css";

interface IButtonProps {
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ onClick, children, type }) => {
  return (
    <button type={type} className={classes["Button"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
