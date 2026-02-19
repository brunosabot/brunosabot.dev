import { ReactNode } from "react";

import classes from "./ResultItem.module.css";

interface IResultItemProps {
  label: string;
  unit?: string;
  value: ReactNode;
}

export default function ResultItem({ label, unit, value }: IResultItemProps) {
  return (
    <div className={classes.Wrapper}>
      <span className={classes.Label}>{label}</span>
      <div className={classes.Value}>
        {value}
        {unit && <span className={classes.Unit}>{unit}</span>}
      </div>
    </div>
  );
}
