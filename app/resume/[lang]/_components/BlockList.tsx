import classes from "./BlockList.module.css";

interface IBlockListProps {
  children: React.ReactNode;
}

export default function BlockList({ children }: IBlockListProps) {
  return <div className={classes.BlockList}>{children}</div>;
}
