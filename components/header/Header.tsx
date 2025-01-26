import classes from "./Header.module.css";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className={classes.Header}>
      <HeaderLink to="/">About</HeaderLink>
      <HeaderLink to="/posts/">Posts</HeaderLink>
      <HeaderLink to="/tools/">Tools</HeaderLink>
      <HeaderLink to="/resume/en/">Resume</HeaderLink>
      <HeaderLink to="/contact/">Contact</HeaderLink>
    </header>
  );
}
