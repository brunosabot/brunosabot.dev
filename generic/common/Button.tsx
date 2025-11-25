import { ButtonHTMLAttributes } from "react";

import classNames from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, type = "button" }: IButtonProps) {
  return (
    <div className={classNames.ButtonWrapper}>
      <button className={classNames.Button} type={type}>
        {children}
      </button>
    </div>
  );
}
