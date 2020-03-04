import React from "react";
import "./BiographySkill.css";

interface Props {
  children: React.ReactNode;
}

const BiographySkill: React.FC<Props> = ({ children }) => (
  <span className="biography-skill">
    {children}
    &nbsp;
  </span>
);

export default BiographySkill;
