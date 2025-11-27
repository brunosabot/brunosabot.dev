import Link from "next/link";

import classes from "./Lang.module.css";

interface ILangProps {
  label: string;
  lang: string;
}

export default async function Lang({ label, lang }: ILangProps) {
  return (
    <Link className={classes.Lang} href={`/resume/${lang}/`}>
      {label}
    </Link>
  );
}
