import classes from "./BiographyCompany.module.css";

interface IBiographyCompanyProps {
  children: React.ReactNode;
  href: string;
  ex?: boolean;
}

export default function BiographyCompany({
  children,
  href,
  ex = false,
}: IBiographyCompanyProps) {
  const classNames = [classes.BiographyCompany];

  if (ex) {
    classNames.push(classes.BiographyCompanyEx);
  }

  return (
    <a className={classNames.join(" ")} href={href}>
      &nbsp;
      {ex ? <span className={classes.BiographyCompanyPrev}>prev.</span> : ""}
      {children}
      &nbsp;
    </a>
  );
}
