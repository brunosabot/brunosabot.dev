import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import classNames from "./Hashtag.module.css";

type IHashtagProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default function Hashtag({ children, ...rest }: IHashtagProps) {
  const Component = rest.href ? "a" : "span";

  return (
    <Component {...rest} className={classNames.Hashtag}>
      <span className={classNames.Hash}>#</span>
      {children}
    </Component>
  );
}
