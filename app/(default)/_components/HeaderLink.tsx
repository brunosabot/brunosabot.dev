import classes from "./HeaderLink.module.css";

interface IHeaderLinkProps {
  children: React.ReactNode;
  href: string;
  isMain?: boolean;
  isSecondary?: boolean;
}

export default function HeaderLink({
  children,
  href,
  isMain = false,
  isSecondary = false,
}: IHeaderLinkProps) {
  const className = [
    classes.HeaderLink,
    isMain ? classes.HeaderLinkMain : "",
    isSecondary ? classes.HeaderLinkSecondary : "",
  ].join(" ");

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
