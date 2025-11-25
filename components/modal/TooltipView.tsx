import classes from "./Tooltip.module.css";
import { TooltipPosition } from "./TooltipPosition";
import { TooltipComponentType } from "./withTooltip";

const TooltipView: TooltipComponentType = ({
  children,
  left,
  position = TooltipPosition.TOP,
  top,
}) => {
  return (
    <div
      className={`${classes.TooltipWrapper} ${classes["Tooltip-" + position]}`}
      style={{ left, top }}
    >
      <span className={`${classes.Tooltip}`}>{children}</span>
      <svg
        className={classes.TooltipArrow}
        height={10}
        viewBox="0 0 20 20"
        width={10}
      >
        <path d="M0 0L20 0L12.5 15Q10 20, 7.5 15L0 0" />
      </svg>
    </div>
  );
};

export default TooltipView;
