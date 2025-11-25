import Link from "next/link";
import classes from "./LinkTag.module.css";

interface ILinkTagProps {
  href: string;
  children: React.ReactNode;
}

export default async function LinkTag({ href, children }: ILinkTagProps) {
  return (
    <Link href={href} className={classes.LinkTag}>
      {children}
    </Link>
  );
}
