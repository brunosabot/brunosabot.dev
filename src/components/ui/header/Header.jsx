import React from "react";
import styles from "./Header.module.css";
import HeaderLink from "./HeaderLink";

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Links}>
      <HeaderLink to="about">About</HeaderLink>
      <HeaderLink to="talks">Talks</HeaderLink>
      <HeaderLink to="projects">Projects</HeaderLink>
      <HeaderLink to="articles">Articles</HeaderLink>
      <HeaderLink to="https://bruno.sabot.me/">CV</HeaderLink>
    </div>
  </header>
);

Header.propTypes = {};

export default Header;
