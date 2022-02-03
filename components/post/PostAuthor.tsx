import Image from "next/image";
import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import classes from "./PostAuthor.module.css";
import brunosabot from "../../public/images/brunosabot.jpg";

interface IPostAuthorProps {
  creator: string;
  date: string;
  timeToRead: number;
  canonical: string | null;
  canonicalName: string | null;
}

const PostAuthor: React.FC<IPostAuthorProps> = ({
  creator,
  date,
  timeToRead,
  canonical,
  canonicalName,
}) => {
  return (
    <div className={classes["blog-post-author"]}>
      <div className={classes["blog-post-author-image"]}>
        <Image
          height={48}
          width={48}
          src={brunosabot}
          alt="Bruno Sabot"
          placeholder="blur"
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

        {canonical === null || canonicalName === null ? null : (
          <div className={classes["blog-post-author-canonical"]}>
            First published on&nbsp;
            <a
              className={classes["blog-post-author-canonical-link"]}
              href={canonical}
            >
              {canonicalName}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAuthor;
