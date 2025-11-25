import classes from "./ProjectContainer.module.css";

interface IProjectContainerProps {
  children: React.ReactNode;
}

export default async function ProjectContainer({
  children,
}: IProjectContainerProps) {
  return <div className={classes.ProjectContainer}>{children}</div>;
}
