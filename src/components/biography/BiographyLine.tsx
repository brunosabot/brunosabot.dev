import React from "react";
import "./BiographyLine.css";

interface Props {
  children: React.ReactNode;
}

const BiographyLine: React.FC<Props> = ({ children }) => (
  <div className="biography-line">{children}</div>
);

export default BiographyLine;
