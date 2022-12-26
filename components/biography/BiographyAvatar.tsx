import React from "react";
import Image from "next/image";
import classes from "./BiographyAvatar.module.css";
import brunosabot from "../../public/images/brunosabot.jpg";

interface Props {
  [key: string]: never;
}

const BiographyAvatar: React.FC<Props> = () => (
  <div className={classes["biography-avatar"]}>
    <Image
      src={brunosabot}
      alt="Bruno Sabot"
      height={150}
      width={150}
      placeholder="blur"
      priority
    />
  </div>
);

export default BiographyAvatar;
