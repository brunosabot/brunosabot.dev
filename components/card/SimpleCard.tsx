import React from "react";
import classes from "./SimpleCard.module.css";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SimpleCard: React.FC<Props> = ({ className, children = null }) => {
  return <div className={`${classes["card"]} ${className}`}>{children}</div>;
};

export default SimpleCard;
