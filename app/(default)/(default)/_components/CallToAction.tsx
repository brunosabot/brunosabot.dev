import { Handshake, MoveRight } from "lucide-react";
import classes from "./CallToAction.module.css";
import Link from "next/link";

export default async function IndexPage() {
  return (
    <div className={classes.CallToAction}>
      <Link className={classes.CallToActionMain} href="/projects/">
        See My Stuff
        <MoveRight
          size={16}
          strokeWidth={1.5}
          className={classes.CallToActionIcon}
        />
      </Link>
      <Link className={classes.CallToActionSecondary} href="/contact">
        Say Hello
        <Handshake
          size={16}
          strokeWidth={1.5}
          className={classes.CallToActionIcon}
        />
      </Link>
    </div>
  );
}
