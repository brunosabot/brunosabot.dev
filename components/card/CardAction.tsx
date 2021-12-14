import React from "react";
import { withTooltip } from "../modal/withTooltip";
import classes from "./CardAction.module.css";

interface Props {
  children: React.ReactNode;
  href?: string;
  label: string;
  onClick?: () => void;
}

const CardAction: React.FC<Props> = ({
  children,
  href,
  label,
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
    aria-label={label}
  >
    {children}
  </a>
);

export default withTooltip<Props>(CardAction);
