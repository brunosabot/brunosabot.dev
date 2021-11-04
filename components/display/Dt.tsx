import React from "react";
import classes from "./Dt.module.css";

interface IDtProps {
  children: React.ReactNode;
}

const Dt: React.FC<IDtProps> = (props) => {
  return <dt className={classes.Dt} {...props} />;
};

export default Dt;
