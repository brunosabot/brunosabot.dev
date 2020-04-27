import React, { useState } from "react";
import "./Header.css";
import HeaderLink from "./HeaderLink";

const Header: React.FC<{}> = () => {
  const [checked, setChecked] = useState(false);
  const classNames = `header ${checked ? "header--checked" : ""}`;

  return (
    <header className={classNames}>
      <div className="header__wrapper">
        <input
          className="header__burger-checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <div className="header__burger" />
        <button
          aria-label="Close menu"
          className="header__link-wrapper"
          onClick={() => setChecked(false)}
          type="button"
        />
        <div className="header__link">
          <HeaderLink to="/">About</HeaderLink>
          <HeaderLink to="/articles/">Articles</HeaderLink>
          <HeaderLink to="/talks/">Talks</HeaderLink>
          <HeaderLink to="/projects/">Projects</HeaderLink>
          <HeaderLink to="/videos/">Videos</HeaderLink>
          <HeaderLink to="/resume/en/">Resume</HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
