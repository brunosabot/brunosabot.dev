import React from "react";
import classes from "./Tooltip.module.css";

export enum TooltipPosition {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

interface ITooltipProps {
  children: React.ReactNode;
  left: number;
  top: number;
  position: TooltipPosition;
}

const Tooltip: React.FC<ITooltipProps> = ({
  children,
  left,
  top,
  position,
}) => {
  return (
    <div
      style={{ left, top }}
      className={`${classes.TooltipWrapper}  ${classes["Tooltip-" + position]}`}
    >
      <span className={`${classes.Tooltip}`}>{children}</span>
      <svg
        className={classes.TooltipArrow}
        viewBox="0 0 20 20"
        height={10}
        width={10}
      >
        <path d="M0 0L20 0L12.5 15Q10 20, 7.5 15L0 0" />
      </svg>
    </div>
  );
};

export default Tooltip;
