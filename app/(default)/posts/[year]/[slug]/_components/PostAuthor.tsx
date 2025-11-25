import Image from "next/image";

import brunosabot from "../../../../../../public/images/brunosabot.jpg";
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
    <div className={classes.PostAuthor}>
      <Image
        alt="Bruno Sabot"
        className={classes.PostAuthorImage}
        height={48}
        placeholder="blur"
        src={brunosabot}
        width={48}
      />

      <div>
        <div className={classes.PostAuthorName}>{creator}</div>
        <div className={classes.PostAuthorDate}>
          <PostDate date={date} />
          {timeToRead ? ` · ${timeToRead} min read` : null}
        </div>

        {canonical === "" || canonicalName === "Blog" ? null : (
          <div className={classes.PostAuthorCanonical}>
            First published on&nbsp;
            <a className={classes.PostAuthorCanonicalLink} href={canonical}>
              {canonicalName}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAuthor;
