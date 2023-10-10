import React, { useRef, useState, ComponentType, useCallback } from "react";
import TooltipView from "./TooltipView";
import ModalPortal from "./ModalPortal";
import classes from "./Tooltip.module.css";
import { TooltipPosition } from "./TooltipPosition";

interface IRequiredComponentProps {
  label: string;
}

interface IWithTooltipProps {
  position?: TooltipPosition;
}

export type TooltipComponentType = React.FunctionComponent<{
  left: number;
  top: number;
  position?: TooltipPosition;
  children: React.ReactNode;
}>;

export function withTooltip<P extends IRequiredComponentProps>(
  WrappedComponent: ComponentType<P>,
  TooltipComponent: TooltipComponentType = TooltipView,
): ComponentType<P & IWithTooltipProps> {
  const WithTooltip: React.FC<P & IWithTooltipProps> = ({
    position = TooltipPosition.TOP,
    ...props
  }) => {
    const [show, setShow] = useState<[number, number]>([0, 0]);
    const refSpan = useRef<HTMLSpanElement>(null);
    const refTimeout = useRef<number>(0);

    const onMouseOverCapture = useCallback(() => {
      window.clearTimeout(refTimeout.current);

      if (refSpan.current === null) return;

      let el: HTMLElement | null = refSpan.current;
      let left = el.offsetWidth / 2;
      if (position === TooltipPosition.RIGHT) left = el.offsetWidth;
      if (position === TooltipPosition.LEFT) left = 0;

      let top = el.offsetHeight / 2;
      if (position === TooltipPosition.BOTTOM) top = el.offsetHeight;
      if (position === TooltipPosition.TOP) top = 0;

      while (el) {
        left += el.offsetLeft;
        top += el.offsetTop;

        el = el.offsetParent as HTMLElement | null;
      }

      setShow([left, top]);
    }, [position]);

    const onMouseOutCapture = useCallback(() => {
      refTimeout.current = window.setTimeout(() => setShow([0, 0]), 10);
    }, []);

    return (
      <span
        ref={refSpan}
        className={classes.WithTooltip}
        onFocusCapture={onMouseOverCapture}
        onBlurCapture={onMouseOutCapture}
        onMouseOverCapture={onMouseOverCapture}
        onMouseOutCapture={onMouseOutCapture}
      >
        <ModalPortal active={show[0] !== 0 || show[1] !== 0}>
          <TooltipComponent left={show[0]} top={show[1]} position={position}>
            {props.label}
          </TooltipComponent>
        </ModalPortal>
        <WrappedComponent {...(props as P)} />
      </span>
    );
  };

  return WithTooltip;
}
