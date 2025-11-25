import classes from "./FooterSocial.module.css";

interface IFooterSocialProps {
  children: React.ReactNode;
}

export default function FooterSocial({ children }: IFooterSocialProps) {
  return <div className={classes.FooterSocial}>{children}</div>;
}
