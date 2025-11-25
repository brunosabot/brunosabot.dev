import Image from "next/image";

import brunosabot from "../../public/images/brunosabot.jpg";
import classes from "./PostAuthor.module.css";
import PostDate from "./PostDate";

interface IPostAuthorProps {
  canonical: string;
  canonicalName: string;
  creator: string;
  date: string;
  timeToRead: number;
}

const PostAuthor: React.FC<IPostAuthorProps> = ({
  canonical,
  canonicalName,
  creator,
  date,
  timeToRead,
}) => {
  return (
    <div className={classes["blog-post-author"]}>
      <div className={classes["blog-post-author-image"]}>
        <Image
          alt="Bruno Sabot"
          height={48}
          placeholder="blur"
          src={brunosabot}
          width={48}
        />
      </div>
      <div>
        <div className={classes["blog-post-author-name"]}>{creator}</div>
        <div className={classes["blog-post-author-date"]}>
          <PostDate
            date={date}
            label={new Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            }).format(new Date(date))}
          />
          {timeToRead ? ` · ${timeToRead} min read` : null}
        </div>

        {canonical === "" || canonicalName === "Blog" ? null : (
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
