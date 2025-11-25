import { Handshake, MoveRight } from "lucide-react";
import Link from "next/link";

import classes from "./CallToAction.module.css";

export default async function IndexPage() {
  return (
    <div className={classes.CallToAction}>
      <Link className={classes.CallToActionMain} href="/projects/">
        See My Stuff
        <MoveRight
          className={classes.CallToActionIcon}
          size={16}
          strokeWidth={1.5}
        />
      </Link>
      <Link className={classes.CallToActionSecondary} href="/contact">
        Say Hello
        <Handshake
          className={classes.CallToActionIcon}
          size={16}
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );
}
