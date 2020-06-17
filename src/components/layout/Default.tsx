import React from "react";
import Header from "../header/Header";
import "./Default.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="appear">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
