import { ReactNode } from "react";

import classes from "./ResultCard.module.css";

interface IResultCardProps {
  children: ReactNode;
}

export default function ResultCard({ children }: IResultCardProps) {
  return <div className={classes.Wrapper}>{children}</div>;
}
