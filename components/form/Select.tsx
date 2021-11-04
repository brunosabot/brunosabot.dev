import React from "react";
import classes from "./Select.module.css";

interface ISelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
}

const Select: React.FC<ISelectProps> = (props) => {
  return <select className={classes.Select} {...props} />;
};

export default Select;
