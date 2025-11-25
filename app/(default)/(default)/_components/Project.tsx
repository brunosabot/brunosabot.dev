import { ArrowUp } from "lucide-react";

import classes from "./Project.module.css";

interface IProjectProps {
  description: string;
  href: string;
  title: string;
}

export default async function Project({
  description,
  href,
  title,
}: IProjectProps) {
  return (
    <a className={classes.Project} href={href}>
      <ArrowUp className={classes.ProjectIcon} size={24} strokeWidth={1.5} />
      <h3 className={classes.ProjectTitle}>{title}</h3>
      <p className={classes.ProjectDescription}>{description}</p>
    </a>
  );
}
