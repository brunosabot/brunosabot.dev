import React from "react";
import Image from "next/image";
import classes from "./BiographyAvatar.module.css";

interface Props {
  [key: string]: never;
}

const BiographyAvatar: React.FC<Props> = () => (
  <div className={classes["biography-avatar"]}>
    <Image
      src="/images/brunosabot.jpg"
      alt="Bruno Sabot"
      height={150}
      width={150}
    />
  </div>
);

export default BiographyAvatar;
