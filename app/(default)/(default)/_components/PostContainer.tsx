import classes from "./PostContainer.module.css";

interface IPostContainerProps {
  children: React.ReactNode;
}
export default async function PostContainer({ children }: IPostContainerProps) {
  return <div className={classes.PostContainer}>{children}</div>;
}
