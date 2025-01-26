import classes from "./Post.module.css";

interface IPostProps {
  children: React.ReactNode;
  href: string;
}

export default function Post({ children, href }: IPostProps) {
  return (
    <a className={classes.Post} href={href}>
      {children}
    </a>
  );
}
