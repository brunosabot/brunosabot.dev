import React, { ComponentType, useCallback, useRef, useState } from "react";

import ModalPortal from "./ModalPortal";
import classes from "./Tooltip.module.css";
import { TooltipPosition } from "./TooltipPosition";
import TooltipView from "./TooltipView";

export type TooltipComponentType = React.FunctionComponent<{
  children: React.ReactNode;
  left: number;
  position?: TooltipPosition;
  top: number;
}>;

interface IRequiredComponentProps {
  label: string;
}

interface IWithTooltipProps {
  position?: TooltipPosition;
}

export function withTooltip<P extends IRequiredComponentProps>(
  WrappedComponent: ComponentType<P>,
  TooltipComponent: TooltipComponentType = TooltipView,
): ComponentType<IWithTooltipProps & P> {
  const WithTooltip: React.FC<IWithTooltipProps & P> = ({
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
        className={classes.WithTooltip}
        onBlurCapture={onMouseOutCapture}
        onFocusCapture={onMouseOverCapture}
        onMouseOutCapture={onMouseOutCapture}
        onMouseOverCapture={onMouseOverCapture}
        ref={refSpan}
      >
        <ModalPortal active={show[0] !== 0 || show[1] !== 0}>
          <TooltipComponent left={show[0]} position={position} top={show[1]}>
            {props.label}
          </TooltipComponent>
        </ModalPortal>
        <WrappedComponent {...(props as P)} />
      </span>
    );
  };

  return WithTooltip;
}
