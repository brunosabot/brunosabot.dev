import Image from "next/image";
import classes from "./PostAuthor.module.css";
import brunosabot from "../../public/images/brunosabot.jpg";
import PostDate from "./PostDate";

interface IPostAuthorProps {
  creator: string;
  date: string;
  timeToRead: number;
  canonical: string;
  canonicalName: string;
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
