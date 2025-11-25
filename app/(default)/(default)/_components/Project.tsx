import { ArrowUp } from "lucide-react";
import classes from "./Project.module.css";

interface IProjectProps {
  title: string;
  description: string;
  href: string;
}

export default async function Project({
  title,
  description,
  href,
}: IProjectProps) {
  return (
    <a className={classes.Project} href={href}>
      <ArrowUp size={24} strokeWidth={1.5} className={classes.ProjectIcon} />
      <h3 className={classes.ProjectTitle}>{title}</h3>
      <p className={classes.ProjectDescription}>{description}</p>
    </a>
  );
}
