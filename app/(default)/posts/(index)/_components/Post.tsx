import { Link } from "lucide-react";
import Image from "next/image";

import classes from "./Post.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface IPostProps {
  canonical: string;
  color: string;
  date: string;
  description: string;
  image?: string;
  lang: string;
  platform: string;
  priority?: boolean;
  tags: string;
  title: string;
  to: string;
}

export default function Post({
  canonical,
  color,
  date,
  description,
  image,
  platform,
  priority = false,
  tags,
  title,
  to,
}: IPostProps) {
  return (
    <article className={classes.Post}>
      <a
        className={classes.PostImageWrapper}
        href="#"
        style={{ backgroundColor: color }}
      >
        {image !== undefined ? (
          <Image
            alt=""
            className={classes.PostImage}
            fill
            priority={priority}
            src={image}
          />
        ) : null}
      </a>
      <div className={classes.PostContent}>
        <p className={classes.PostPublishedAt}>
          {dateFormatter.format(new Date(date))}
        </p>
        <h3 className={classes.PostTitle}>
          <a className={classes.PostTitleLink} href={to}>
            {title}
          </a>
        </h3>
        <p className={classes.PostDescription}>{description}</p>
        <div className={classes.PostTags}>
          {tags.split(",").map((tag) => (
            <span className={classes.PostTag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {platform && canonical ? (
          <div className={classes.PostCanonical}>
            <a className={classes.PostCanonicalLink} href={canonical}>
              <Link size={16} strokeWidth={1.25} />
              Originally on {platform}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
