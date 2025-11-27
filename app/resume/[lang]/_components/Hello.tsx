import Link from "next/link";

import classes from "./Hello.module.css";

export default async function Hello() {
  return (
    <Link className={classes.Hello} href={`/contact/`}>
      Say Hello 👋
    </Link>
  );
}
