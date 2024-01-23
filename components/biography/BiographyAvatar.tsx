import Image from "next/image";
import classes from "./BiographyAvatar.module.css";
import avatarImage from "../../public/images/brunosabot.jpg";

interface IBiographyAvatarProps {
  [key: string]: never;
}

export default function BiographyAvatar({}: IBiographyAvatarProps) {
  return (
    <div className={classes.Avatar}>
      <Image
        src={avatarImage}
        alt="Bruno Sabot"
        height={250}
        width={250}
        placeholder="blur"
        priority
      />
    </div>
  );
}
