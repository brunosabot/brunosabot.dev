import React from "react";
import classes from "./BiographyCompany.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  ex?: boolean;
}

const BiographyCompany: React.FC<Props> = ({ children, href, ex = false }) => (
  <a
    className={`${classes["biography-company"]} ${
      ex ? classes["biography-company--ex"] : ""
    }`}
    href={href}
  >
    &nbsp;
    {children}
    &nbsp;
  </a>
);

export default BiographyCompany;
