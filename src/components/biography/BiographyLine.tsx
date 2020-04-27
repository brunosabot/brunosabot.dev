import React from "react";
import "./BiographyLine.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographyLine: React.FC<Props> = ({ children, style = {} }) => (
  <div className="biography-line" style={style}>
    {children}
  </div>
);

export default BiographyLine;
