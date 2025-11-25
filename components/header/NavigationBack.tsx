import Link from "next/link";

import classes from "./NavigationBack.module.css";

export default function NavigationBack() {
  return (
    <Link className={classes.NavigationBack} href="/tools/">
      <svg style={{ height: "24px", width: "24px" }} viewBox="0 0 24 24">
        <path
          d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
          fill="currentColor"
        />
      </svg>
      Go back
    </Link>
  );
}
