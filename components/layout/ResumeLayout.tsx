import React from "react";
import classes from "./ResumeLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout: React.FC<Props> = ({ children }) => (
  <main className={classes["resume-body"]}>{children}</main>
);

export default ResumeLayout;
