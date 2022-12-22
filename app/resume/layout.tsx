import React from "react";
import classes from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout: React.FC<Props> = ({ children }) => (
  <main className={classes.Layout}>{children}</main>
);

export default ResumeLayout;
