import React from "react";
import classes from "./BiographyLine.module.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographyLine: React.FC<Props> = ({ children, style = {} }) => (
  <div className={classes["biography-line"]} style={style}>
    {children}
  </div>
);

export default BiographyLine;
