import React from "react";
import classes from "./BiographySkill.module.css";

interface Props {
  children: React.ReactNode;
}

const BiographySkill: React.FC<Props> = ({ children }) => (
  <span className={classes["biography-skill"]}>
    {children}
    &nbsp;
  </span>
);

export default BiographySkill;
