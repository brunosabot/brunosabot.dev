import React from "react";
import classes from "./PageTitle.module.css";

interface Props {
  children: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ children }) => (
  <h1 className={classes["page-title"]}>{children}</h1>
);

export default PageTitle;
