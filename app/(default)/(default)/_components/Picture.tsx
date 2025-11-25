import bruno from "../../../../public/images/brunosabot.jpg";
import Image from "next/image";
import classes from "./Picture.module.css";

export default async function Picture() {
  return (
    <div className={classes.Picture}>
      <Image
        src={bruno}
        alt="A portrait of Bruno Sabot, staff software engineer & engineering manager."
        width={128}
        height={128}
        className={classes.PictureImage}
      />
    </div>
  );
}
