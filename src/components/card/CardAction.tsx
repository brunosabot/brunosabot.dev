import React from "react";
import "./CardAction.css";

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
  onClick = () => void 0
}) => (
  <a
    href={href}
    className="card-action"
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    tabIndex={0}
    onKeyPress={e => e.key === "Enter" && onClick()}
    aria-label={name}
  >
    {children}
  </a>
);

export default CardAction;
