import React from "react";
import classes from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout: React.FC<Props> = ({ children }) => {
  const classNames = [classes.Content, classes.ContentCols].join(" ");

  return (
    <>
      <main className={classNames}>{children}</main>
    </>
  );
};

export default ResumeLayout;
