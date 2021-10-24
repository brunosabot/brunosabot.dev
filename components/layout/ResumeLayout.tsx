import React from "react";
import classes from "./ResumeLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout: React.FC<Props> = ({ children }) => (
  <div className={classes["resume-body"]}>{children}</div>
);

export default ResumeLayout;
