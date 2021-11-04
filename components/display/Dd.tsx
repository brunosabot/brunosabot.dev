import React from "react";
import classes from "./Dd.module.css";

interface IDdProps {
  children: React.ReactNode;
}

const Dd: React.FC<IDdProps> = (props) => {
  return <dd className={classes.Dd} {...props} />;
};

export default Dd;
