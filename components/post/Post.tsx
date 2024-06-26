import Image from "next/image";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";
import MatterPost from "../../types/MatterPost";
import SeoBlogPosting from "../seo/BlogPosting";

interface IPostProps {
  readingTime: number;
  post: MatterPost;
  html: string;
}

const Post: React.FC<IPostProps> = ({ post, readingTime, html }) => {
  return (
    <div className={classes["blog-post-container"]}>
      <div className={classes["blog-post"]}>
        <h1>{post.data.title}</h1>
        <h2>{post.data.subtitle}</h2>

        <div className={classes["blog-post-infos"]}>
          <PostAuthor
            creator={post.data.creator}
            date={post.data.date}
            timeToRead={readingTime}
            canonical={post.data.canonical}
            canonicalName={post.data.platform}
          />
          <PostSocial title={post.data.title} path={post.data.path} />
        </div>

        <figure>
          <Image
            priority
            src={post.data.originalImage}
            alt={post.data.originalImageAlt?.replace(/<[^>]*>/g, "")}
            height="487"
            width="680"
            style={{ backgroundColor: post.data.color }}
            className={classes["blog-post-hero-image"]}
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
        path={post.data.path}
        title={post.data.title}
        description={post.data.description}
        image={post.data.originalImage}
        datePublished={new Date(post.data.date)}
        dateModified={new Date(post.data.lastModified)}
      />
    </div>
  );
};

export default Post;
