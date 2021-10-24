import React from "react";
import classes from "./CardAction.module.css";

interface Props {
  children: React.ReactNode;
  href?: string;
  name: string;
  onClick?: () => void;
}

const CardAction: React.FC<Props> = ({
  children,
  href,
  name,
  onClick = () => undefined,
}) => (
  <a
    href={href}
    className={classes["card-action"]}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === "Enter") {
        onClick();
      }
    }}
    aria-label={name}
  >
    {children}
  </a>
);

export default CardAction;
