"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import classes from "./Header.module.css";
import HeaderLink from "./HeaderLink";

const Header: React.FC<{}> = () => {
  const [checked, setChecked] = useState(false);
  const path = usePathname();
  const classNames =
    classes["header"] + ` ${checked ? classes["header--checked"] : ""}`;

  return (
    <header className={classNames}>
      <div className={classes["header__wrapper"]}>
        <button
          aria-label="Toggle menu"
          className={classes["header__burger-checkbox"]}
          onClick={() => {
            setChecked(!checked);
          }}
        >
          <div className={classes["header__burger"]} />
        </button>
        <button
          aria-label="Close menu"
          className={classes["header__link-wrapper"]}
          onClick={() => setChecked(false)}
          type="button"
        />
        <div className={classes["header__link"]}>
          <HeaderLink current={path} to="/">
            About
          </HeaderLink>
          <HeaderLink current={path} to="/posts/">
            Posts
          </HeaderLink>
          <HeaderLink current={path} to="/talks/">
            Talks
          </HeaderLink>
          <HeaderLink current={path} to="/opensource/">
            Open source
          </HeaderLink>
          <HeaderLink current={path} to="/projects/">
            Projects
          </HeaderLink>
          <HeaderLink current={path} to="/podcasts/">
            Podcasts
          </HeaderLink>
          <HeaderLink current={path} to="/videos/">
            Videos
          </HeaderLink>
          <HeaderLink current={path} to="/tools/">
            Tools
          </HeaderLink>
          <HeaderLink current={path} to="/resume/en/">
            Resume
          </HeaderLink>
          <HeaderLink current={path} to="/contact/">
            Contact
          </HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
