import React from "react";
import Image from "next/image";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";
import MatterPost from "../../types/MatterPost";

function getLDJSON(post: MatterPost) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://brunosabot.dev/" + post.data.path,
    },
    headline: post.data.title,
    description: post.data.description,
    image: post.data.originalImage,
    author: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: "https://brunosabot.dev/",
    },
    publisher: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: "https://brunosabot.dev/",
    },
    datePublished: new Date(post.data.date).toISOString().split("T")[0],
    dateModified: new Date(post.data.updatedDate ?? post.data.date)
      .toISOString()
      .split("T")[0],
  });
}

interface IPostProps {
  readingTime: number;
  post: MatterPost;
  heroPlaceholder: string;
  heroHeight: number;
  html: string;
}

const Post: React.FC<IPostProps> = ({
  post,
  readingTime,
  heroHeight,
  heroPlaceholder,
  html,
}) => {
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
            height={heroHeight}
            width="680"
            placeholder="blur"
            blurDataURL={heroPlaceholder}
          />
          {post.data.originalImageAlt ? (
            <figcaption
              dangerouslySetInnerHTML={{ __html: post.data.originalImageAlt }}
            />
          ) : null}
        </figure>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getLDJSON(post) }}
      />
    </div>
  );
};

export default Post;
