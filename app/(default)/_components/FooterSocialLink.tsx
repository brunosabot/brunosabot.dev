import classes from "./FooterSocialLink.module.css";

interface IFooterSocialProps {
  children: React.ReactNode;
  href: string;
  name: string;
}

export default function FooterSocialLink({
  href,
  name,
  children,
}: IFooterSocialProps) {
  return (
    <a
      className={classes.FooterSocialLink}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`Bruno Sabot on ${name}`}
    >
      {children}
    </a>
  );
}
