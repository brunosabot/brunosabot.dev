import Link from "next/link";

import classes from "./HeaderLogo.module.css";

export default function HeaderLogo() {
  return (
    <Link className={classes.HeaderLogo} href="/">
      <h2 className={classes.HeaderLogoText}>Bruno Sabot</h2>
    </Link>
  );
}
