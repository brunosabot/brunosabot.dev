import React from "react";
import classes from "./Title.module.css";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => (
  <h2 className={classes["resume-title"]}>{children}</h2>
);

export default Title;
