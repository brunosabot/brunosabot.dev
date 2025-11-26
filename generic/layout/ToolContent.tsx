import classes from "./ToolContent.module.css";

interface IToolContentProps {
  children: React.ReactNode;
}

export default function ToolContent({ children }: IToolContentProps) {
  return <main className={classes.Content}>{children}</main>;
}
