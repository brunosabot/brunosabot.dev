import { ButtonHTMLAttributes } from "react";

import classNames from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  type = "button",
  ...rest
}: IButtonProps) {
  return (
    <button className={classNames.Button} type={type} {...rest}>
      {children}
    </button>
  );
}
