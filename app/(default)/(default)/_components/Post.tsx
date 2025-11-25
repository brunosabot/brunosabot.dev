import Image from "next/image";

import classes from "./Post.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface IPostProps {
  date: Date;
  description: string;
  href: string;
  image?: string;
  title: string;
}
export default async function Post({
  date,
  description,
  href,
  image,
  title,
}: IPostProps) {
  return (
    <a className={classes.Post} href={href}>
      <div className={classes.PostImageContainer}>
        {image ? (
          <Image alt={title} className={classes.PostImage} fill src={image} />
        ) : null}
      </div>
      <div className={classes.PostContent}>
        <p className={classes.PostDate}>{dateFormatter.format(date)}</p>
        <p className={classes.PostTitle}>{title}</p>
        <p className={classes.PostDescription}>{description}</p>
      </div>
    </a>
  );
}
