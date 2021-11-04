import React from "react";
import classes from "./Dl.module.css";

interface IDlProps {
  children: React.ReactNode;
}

const Dl: React.FC<IDlProps> = (props) => {
  return <dl className={classes.Dl} {...props} />;
};

export default Dl;
