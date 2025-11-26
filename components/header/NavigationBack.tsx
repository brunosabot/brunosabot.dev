import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import classes from "./NavigationBack.module.css";

export default function NavigationBack() {
  return (
    <Link className={classes.NavigationBack} href="/tools/">
      <ArrowLeft />
      Back To Tools
    </Link>
  );
}
