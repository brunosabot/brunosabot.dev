import React from "react";
import classes from "./BiographySubtitle.module.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographySubtitle: React.FC<Props> = ({ children, style }) => (
  <h2 className={classes["biography-subtitle"]} style={style}>
    {children}
  </h2>
);

export default BiographySubtitle;
