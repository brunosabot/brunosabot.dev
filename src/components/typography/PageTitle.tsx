import React from "react";
import "./PageTitle.css";

interface Props {
  children: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ children }) => (
  <h1 className="page-title">{children}</h1>
);

export default PageTitle;
