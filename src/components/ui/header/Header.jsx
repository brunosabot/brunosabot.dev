import React from "react";
import styles from "./Header.module.css";
import HeaderLink from "./HeaderLink";

const Header = () => (
  <header className={styles.Header}>
    <HeaderLink to="about">About</HeaderLink>
    <HeaderLink to="talks">Talks</HeaderLink>
    <HeaderLink to="projects">Projects</HeaderLink>
    <HeaderLink to="https://bruno.sabot.me/">CV</HeaderLink>
  </header>
);

Header.propTypes = {};

export default Header;
