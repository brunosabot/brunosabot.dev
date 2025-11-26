import { HTMLAttributes } from "react";

import classes from "./ResultCard.module.css";

type IResultCardProps = HTMLAttributes<HTMLDivElement>;

export default function ResultCard({ className, ...props }: IResultCardProps) {
  const classList = [classes.Wrapper, className].join(" ");

  return <div className={classList} {...props}></div>;
}
