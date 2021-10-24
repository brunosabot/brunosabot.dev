import React, { useState } from "react";
import classes from "./Header.module.css";
import HeaderLink from "./HeaderLink";

const Header: React.FC<{}> = () => {
  const [checked, setChecked] = useState(false);
  const classNames =
    classes["header"] + ` ${checked ? classes["header--checked"] : ""}`;

  return (
    <header className={classNames}>
      <div className={classes["header__wrapper"]}>
        <input
          aria-label="Toggle menu"
          className={classes["header__burger-checkbox"]}
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <div className={classes["header__burger"]} />
        <button
          aria-label="Close menu"
          className={classes["header__link-wrapper"]}
          onClick={() => setChecked(false)}
          type="button"
        />
        <div className={classes["header__link"]}>
          <HeaderLink to="/">About</HeaderLink>
          <HeaderLink to="/posts/">Posts</HeaderLink>
          <HeaderLink to="/talks/">Talks</HeaderLink>
          <HeaderLink to="/opensource/">Open source</HeaderLink>
          <HeaderLink to="/projects/">Projects</HeaderLink>
          <HeaderLink to="/podcasts/">Podcasts</HeaderLink>
          <HeaderLink to="/videos/">Videos</HeaderLink>
          <HeaderLink to="/resume/en/">Resume</HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
