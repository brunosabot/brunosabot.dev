import Link from "next/link";
import classes from "./FooterLink.module.css";
import { mdiOpenInNew } from "@mdi/js";
import Svg from "../svg/Svg";

interface IFooterLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function FooterLink({ children, to }: IFooterLinkProps) {
  const isExternal = to.indexOf("http") === 0;

  return (
    <>
      {isExternal ? (
        <a
          className={classes.FooterLink}
          href={to}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Svg d={mdiOpenInNew} className={classes.ExternalIcon} />
          {children}
        </a>
      ) : (
        <Link href={to} className={classes.FooterLink}>
          {children}
        </Link>
      )}
    </>
  );
}
