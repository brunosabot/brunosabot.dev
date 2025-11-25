import React, { CSSProperties } from "react";

import classes from "./SimpleCard.module.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const SimpleCard: React.FC<Props> = ({ children = null, className, style }) => {
  return (
    <div className={`${classes["card"]} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default SimpleCard;
