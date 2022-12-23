import React from "react";
import classes from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className={classes.Content}>{children}</main>
    </>
  );
};

export default ResumeLayout;
