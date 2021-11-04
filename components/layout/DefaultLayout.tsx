import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import classes from "./DefaultLayout.module.css";

interface Props {
  type?: "columns" | "short" | "default";
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ type = "default", children }) => {
  const classNames = `${classes.content} ${
    type === "columns" ? classes["content-cols"] : ""
  } ${type === "short" ? classes["content-short"] : ""}`;

  return (
    <>
      <Header />
      <main className={classNames}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
