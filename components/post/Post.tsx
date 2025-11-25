import Image from "next/image";

import MatterPost from "../../types/MatterPost";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import SeoBlogPosting from "../seo/BlogPosting";
import classes from "./Post.module.css";

interface IPostProps {
  html: string;
  post: MatterPost;
  readingTime: number;
}

const Post: React.FC<IPostProps> = ({ html, post, readingTime }) => {
  return (
    <div className={classes["blog-post-container"]}>
      <div className={classes["blog-post"]}>
        <h1>{post.data.title}</h1>
        <h2>{post.data.subtitle}</h2>

        <div className={classes["blog-post-infos"]}>
          <PostAuthor
            canonical={post.data.canonical}
            canonicalName={post.data.platform}
            creator={post.data.creator}
            date={post.data.date}
            timeToRead={readingTime}
          />
          <PostSocial path={post.data.path} title={post.data.title} />
        </div>

        <figure>
          <Image
            alt={post.data.originalImageAlt?.replace(/<[^>]*>/g, "")}
            className={classes["blog-post-hero-image"]}
            height="487"
            priority
            src={post.data.originalImage}
            style={{ backgroundColor: post.data.color }}
            width="680"
          />
          {post.data.originalImageAlt ? (
            <figcaption
              dangerouslySetInnerHTML={{ __html: post.data.originalImageAlt }}
            />
          ) : null}
        </figure>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>

      <div className={classes["blog-post__tags"]}>
        {post.data.tags.split(",").map((tag: string) => (
          <a
            className={classes["blog-post__tag"]}
            href={`/tags/${tag}`}
            key={tag}
          >
            {tag}
          </a>
        ))}
      </div>

      <SeoBlogPosting
        dateModified={new Date(post.data.lastModified)}
        datePublished={new Date(post.data.date)}
        description={post.data.description}
        image={post.data.originalImage}
        path={post.data.path}
        title={post.data.title}
      />
    </div>
  );
};

export default Post;
