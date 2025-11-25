import classes from "./Post.module.css";
import Image from "next/image";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface IPostProps {
  href: string;
  title: string;
  date: Date;
  description: string;
  image?: string;
}
export default async function Post({
  href,
  title,
  date,
  description,
  image,
}: IPostProps) {
  return (
    <a className={classes.Post} href={href}>
      <div className={classes.PostImageContainer}>
        {image ? (
          <Image src={image} alt={title} fill className={classes.PostImage} />
        ) : null}
      </div>
      <div>
        <p className={classes.PostDate}>{dateFormatter.format(date)}</p>
        <p className={classes.PostTitle}>{title}</p>
        <p className={classes.PostDescription}>{description}</p>
      </div>
    </a>
  );
}
