import Image from "next/image";
import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import classes from "./PostAuthor.module.css";

interface IPostAuthorProps {
  creator: string;
  date: string;
  timeToRead: number;
}

const PostAuthor: React.FC<IPostAuthorProps> = ({
  creator,
  date,
  timeToRead,
}) => {
  return (
    <div className={classes["blog-post-author"]}>
      <div className={classes["blog-post-author-image"]}>
        <Image
          height={48}
          width={48}
          src="/images/brunosabot.jpg"
          alt="Bruno Sabot"
        />
      </div>
      <div>
        <div className={classes["blog-post-author-name"]}>{creator}</div>
        <div className={classes["blog-post-author-date"]}>
          <span>
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </span>
          {timeToRead ? ` · ${timeToRead} min read` : null}
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
