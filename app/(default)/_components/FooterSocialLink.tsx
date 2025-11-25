import classes from "./FooterSocialLink.module.css";

interface IFooterSocialProps {
  children: React.ReactNode;
  href: string;
  name: string;
}

export default function FooterSocialLink({
  children,
  href,
  name,
}: IFooterSocialProps) {
  return (
    <a
      aria-label={`Bruno Sabot on ${name}`}
      className={classes.FooterSocialLink}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
