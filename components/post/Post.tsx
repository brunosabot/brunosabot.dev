import React from "react";
import Image from "next/image";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";
import MatterPost from "../../types/MatterPost";
import { SITE_METADATA } from "../../lib/metadata";

function getLDJSON(post: MatterPost) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_METADATA.siteUrl}/${post.data.path}`,
    },
    headline: post.data.title,
    description: post.data.description,
    image: post.data.originalImage,
    author: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: `${SITE_METADATA.siteUrl}/`,
    },
    publisher: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: `${SITE_METADATA.siteUrl}/`,
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getLDJSON(post) }}
      />
    </div>
  );
};

export default Post;
