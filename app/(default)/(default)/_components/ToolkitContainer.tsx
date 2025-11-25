import classes from "./ToolkitContainer.module.css";

interface IToolkitContainerProps {
  abstract: React.ReactNode;
  children: React.ReactNode;
}

export default async function ToolkitContainer({
  abstract,
  children,
}: IToolkitContainerProps) {
  return (
    <div className={classes.ToolkitContainer}>
      <div className={classes.ToolkitContainerAbstract}>{abstract}</div>
      <div className={classes.ToolkitContainerTags}>{children}</div>
    </div>
  );
}
