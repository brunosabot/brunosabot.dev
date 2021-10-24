import React from "react";
import classes from "./BiographyTitle.module.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographyTitle: React.FC<Props> = ({ children, style }) => (
  <h1 className={classes["biography-title"]} style={style}>
    {children}
  </h1>
);

export default BiographyTitle;
