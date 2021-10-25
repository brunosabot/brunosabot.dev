import React from "react";
import Header from "../header/Header";
import classes from "./HomeLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes["content"]}>{children}</main>
    </>
  );
};

export default HomeLayout;
