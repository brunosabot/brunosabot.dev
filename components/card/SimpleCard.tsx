import React, { CSSProperties } from "react";
import classes from "./SimpleCard.module.css";

interface Props {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

const SimpleCard: React.FC<Props> = ({ className, style, children = null }) => {
  return (
    <div className={`${classes["card"]} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default SimpleCard;
