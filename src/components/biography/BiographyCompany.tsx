import React from "react";
import "./BiographyCompany.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const BiographyCompany: React.FC<Props> = ({ children, href }) => (
  <a className="biography-company" href={href}>
    &nbsp;
    {children}
    &nbsp;
  </a>
);

export default BiographyCompany;
