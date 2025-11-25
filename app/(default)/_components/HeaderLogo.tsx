import classes from "./HeaderLogo.module.css";

interface IHeaderLogoProps {}

export default function HeaderLogo({}: IHeaderLogoProps) {
  return (
    <a className={classes.HeaderLogo} href="/">
      <h2 className={classes.HeaderLogoText}>Bruno Sabot</h2>
    </a>
  );
}
