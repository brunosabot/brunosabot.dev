import React from "react";
import "./BiographyTitle.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographyTitle: React.FC<Props> = ({ children, style }) => (
  <h1 className="biography-title" style={style}>
    {children}
  </h1>
);

export default BiographyTitle;
