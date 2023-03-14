"use client";

import React from "react";
import { TooltipPosition } from "../modal/TooltipPosition";
import { WithATooltip } from "../modal/WithATooltip";
import classes from "./CardAction.module.css";

interface Props {
  children: React.ReactNode;
  href?: string;
  label: string;
  onClick?: () => void;
  position?: TooltipPosition;
}

const CardAction: React.FC<Props> = ({
  children,
  href,
  label,
  onClick = undefined,
  position = TooltipPosition.TOP,
}) => (
  <WithATooltip label={label} position={position}>
    <a
      href={href}
      className={classes["card-action"]}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onClick?.();
        }
      }}
      aria-label={label}
    >
      {children}
    </a>
  </WithATooltip>
);

export default CardAction;
