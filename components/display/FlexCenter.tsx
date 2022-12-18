import React from "react";
import classes from "./FlexCenter.module.css";

interface IFlexCenterProps {
  children: React.ReactNode;
}

const FlexCenter: React.FC<IFlexCenterProps> = (props) => {
  return <div className={classes.FlexCenter} {...props} />;
};

export default FlexCenter;
