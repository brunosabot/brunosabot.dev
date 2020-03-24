import React from "react";
import "./BiographyTitle.css";

interface Props {
  children: React.ReactNode;
}

const BiographyTitle: React.FC<Props> = ({ children }) => (
  <div className="biography-title">{children}</div>
);

export default BiographyTitle;
