import Link from "next/link";

import classes from "./LinkTag.module.css";

interface ILinkTagProps {
  children: React.ReactNode;
  href: string;
}

export default async function LinkTag({ children, href }: ILinkTagProps) {
  return (
    <Link className={classes.LinkTag} href={href}>
      {children}
    </Link>
  );
}
