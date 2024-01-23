import classes from "./BiographyPost.module.css";

interface IBiographyPostProps {
  children: React.ReactNode;
  href: string;
}

export default function BiographyPost({ children, href }: IBiographyPostProps) {
  return (
    <a className={classes.BiographyPost} href={href}>
      {children}
    </a>
  );
}
