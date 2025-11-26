import { ReactNode } from "react";

import classes from "./ResultCard.module.css";

interface IResultCardProps {
  children: ReactNode;
  className?: string;
}

export default function ResultCard({ children, className }: IResultCardProps) {
  const classList = [classes.Wrapper, className].join(" ");

  return <div className={classList}>{children}</div>;
}
