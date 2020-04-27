import React from "react";
import "./BiographyTitle.css";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const BiographyTitle: React.FC<Props> = ({ children, style }) => (
  <div className="biography-title" style={style}>
    {children}
  </div>
);

export default BiographyTitle;
