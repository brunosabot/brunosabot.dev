"use client";

import React, { useRef, useState, ComponentType, useCallback } from "react";
import TooltipView from "./TooltipView";
import ModalPortal from "./ModalPortal";
import classes from "./Tooltip.module.css";
import { CSSTransition } from "react-transition-group";

export enum TooltipPosition {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

export type TooltipComponentType = React.FunctionComponent<{
  left: number;
  top: number;
  position?: TooltipPosition;
  children: React.ReactNode;
}>;

interface IWithATooltipProps {
  children: React.ReactNode;
  TooltipComponent?: TooltipComponentType;
  position?: TooltipPosition;
  label: string;
}

export function WithATooltip({
  children,
  TooltipComponent = TooltipView,
  position = TooltipPosition.TOP,
  label,
}: IWithATooltipProps) {
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
      <CSSTransition
        in={show[0] !== 0 || show[1] !== 0}
        timeout={300}
        classNames="modal"
      >
        <ModalPortal active={show[0] !== 0 || show[1] !== 0}>
          <TooltipComponent left={show[0]} top={show[1]} position={position}>
            {label}
          </TooltipComponent>
        </ModalPortal>
      </CSSTransition>
      {children}
    </span>
  );
}
