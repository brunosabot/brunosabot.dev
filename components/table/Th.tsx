import React from "react";
import classes from "./Th.module.css";

interface IThProps {
  children: React.ReactNode;
}

const Th: React.FC<IThProps> = ({ children }) => {
  return <th className={classes.Th}>{children}</th>;
};

export default Th;
