import React from "react";
import "./Header.css";
import HeaderLink from "./HeaderLink";

const Header: React.FC<{}> = () => (
  <header className="header">
    <div className="header__wrapper">
      <input className="header__burger-checkbox" type="checkbox" />
      <div className="header__burger"></div>
      <div className="header__link">
        <HeaderLink to="/">About</HeaderLink>
        <HeaderLink to="/talks/">Talks</HeaderLink>
        <HeaderLink to="/projects/">Projects</HeaderLink>
        <HeaderLink to="/articles/">Articles</HeaderLink>
        <HeaderLink to="/videos/">Videos</HeaderLink>
        <HeaderLink to="/resume/en/">Resume</HeaderLink>
      </div>
    </div>
  </header>
);

export default Header;
