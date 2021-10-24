import React from "react";
import classes from "./BiographyCompany.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const BiographyCompany: React.FC<Props> = ({ children, href }) => (
  <a className={classes["biography-company"]} href={href}>
    &nbsp;
    {children}
    &nbsp;
  </a>
);

export default BiographyCompany;
