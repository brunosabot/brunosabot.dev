import { ButtonHTMLAttributes } from "react";

import classNames from "./ButtonSecondary.module.css";

interface IButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonSecondary({
  children,
  type = "button",
  ...rest
}: IButtonSecondaryProps) {
  return (
    <button className={classNames.ButtonSecondary} type={type} {...rest}>
      {children}
    </button>
  );
}
