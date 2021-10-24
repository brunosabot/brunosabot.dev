import React from "react";
import Header from "../header/Header";
import classes from "./DefaultLayout.module.css";

interface Props {
  type?: "columns" | "default";
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ type = "default", children }) => {
  //   .content {
  //   padding: 0 16px;
  // }
  // .content-cols {
  //   display: grid;
  //   grid-auto-rows: max-content;
  //   grid-gap: 24px;
  //   grid-template-columns: repeat(auto-fill, 350px);
  //   justify-content: center;
  //   margin: auto;
  //   max-width: 1146px;
  //   padding: 0 24px;
  // }

  const classNames = `${classes.content} ${
    type === "columns" ? classes["content-cols"] : ""
  }`;

  return (
    <>
      <Header />
      <main className={classNames}>{children}</main>
    </>
  );
};

export default Layout;
