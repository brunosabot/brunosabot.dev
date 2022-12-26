import React from "react";
import classes from "./BiographySubtitle.module.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographySubtitle: React.FC<Props> = ({ children, style }) => (
  <h1 className={classes["biography-subtitle"]} style={style}>
    {children}
  </h1>
);

export default BiographySubtitle;
