import Image from "next/image";

import bruno from "../../../../public/images/brunosabot.jpg";
import classes from "./Picture.module.css";

export default async function Picture() {
  return (
    <div className={classes.Picture}>
      <Image
        alt="A portrait of Bruno Sabot, staff software engineer & engineering manager."
        className={classes.PictureImage}
        height={128}
        priority
        src={bruno}
        width={128}
      />
    </div>
  );
}
