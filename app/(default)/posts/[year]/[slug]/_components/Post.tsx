import Image from "next/image";

import SeoBlogPosting from "../../../../../../components/seo/BlogPosting";
import ParagraphSecondary from "../../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../../generic/typography/Title";
import MatterPost from "../../../../../../types/MatterPost";
import classes from "./Post.module.css";
import PostAuthor from "./PostAuthor";
import PostSocial from "./PostSocial";

interface IPostProps {
  html: string;
  post: MatterPost;
  readingTime: number;
}

const Post: React.FC<IPostProps> = ({ html, post, readingTime }) => {
  return (
    <>
      <Title>{post.data.title}</Title>
      <ParagraphSecondary>{post.data.subtitle}</ParagraphSecondary>

      <div className={classes.PostInfos}>
        <PostAuthor
          canonical={post.data.canonical}
          canonicalName={post.data.platform}
          creator={post.data.creator}
          date={post.data.date}
          timeToRead={readingTime}
        />
        <PostSocial path={post.data.path} title={post.data.title} />
      </div>

      <figure className={classes.PostImageFigure}>
        <div className={classes.PostImageWrapper}>
          <Image
            alt={post.data.originalImageAlt?.replace(/<[^>]*>/g, "")}
            className={classes.PostImage}
            fill
            priority
            src={post.data.originalImage}
            style={{ backgroundColor: post.data.color }}
          />
        </div>
        {post.data.originalImageAlt ? (
          <figcaption
            className={classes.PostImageCaption}
            dangerouslySetInnerHTML={{ __html: post.data.originalImageAlt }}
          />
        ) : null}
      </figure>

      <div className={classes.Post}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>

      <div className={classes.PostTags}>
        {post.data.tags.split(",").map((tag: string) => (
          <a className={classes.PostTag} href={`/tags/${tag}`} key={tag}>
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
    </>
  );
};

export default Post;
