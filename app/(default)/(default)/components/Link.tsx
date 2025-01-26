import classes from "./Link.module.css";

interface ILinkProps {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: ILinkProps) {
  return (
    <a className={classes.Link} href={href}>
      {children}
    </a>
  );
}
