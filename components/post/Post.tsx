import { MDXRemote } from "next-mdx-remote";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import PostAuthor from "../post/PostAuthor";
import PostSocial from "../post/PostSocial";
import classes from "./Post.module.css";

import PrismAsyncLight from "react-syntax-highlighter/dist/cjs/prism-async-light";

import darkStyle from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import lightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";

const mapLanguage = {
  yml: "yaml",
  Dockerfile: "docker",
  eslintrc: "json",
  js: "javascript",
  ts: "typescript",
  stylelintrc: "json",
  prettierrc: "json",
};

const Code = (props: any) => {
  const [isReady, setIsReady] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const language = useMemo(() => {
    const inputLanguage: string =
      (props.className?.replace("language-", "") || props["data-type"]) ?? "";

    if (inputLanguage in mapLanguage) {
      return mapLanguage[inputLanguage as keyof typeof mapLanguage];
    }

    return inputLanguage;
  }, [props]);

  useEffect(() => {
    if (language === "") {
      setIsReady(true);
    } else {
      import(
        "react-syntax-highlighter/dist/cjs/languages/prism/" + language
      ).then((importedLanguage) => {
        PrismAsyncLight.registerLanguage(language, importedLanguage.default);
        setIsReady(true);
      });
    }
  }, [language]);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  if (isReady === false) return null;

  return (
    <>
      {props.metastring ? (
        <div className={classes["blog-post-gist-filename"]}>
          {props.metastring}
        </div>
      ) : null}
      {language ? (
        <PrismAsyncLight
          language={language === "" ? "text" : language}
          showLineNumbers
          wrapLines
          wrapLongLines={language === ""}
          style={isDarkMode ? darkStyle : lightStyle}
        >
          {props.children}
        </PrismAsyncLight>
      ) : (
        <code data-type="simple">{props.children}</code>
      )}
    </>
  );
};

const components = {
  code: Code,
  img: (props: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={props.src} alt={props.alt} loading="lazy" />
  ),
};

interface IPostProps {
  post: any;
  source: any;
}

const Post: React.FC<IPostProps> = ({ source, post }) => {
  return (
    <div className={classes["blog-post-container"]}>
      <div className={classes["blog-post"]}>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>

        <div className={classes["blog-post-infos"]}>
          <PostAuthor
            creator={post.creator}
            date={post.date}
            timeToRead={post.timeToRead}
            canonical={post.canonical}
            canonicalName={post.platform}
          />
          <PostSocial title={post.title} path={post.path} />
        </div>

        <figure>
          <Image
            priority
            src={post.image}
            alt={post.imageAlt.replace(/<[^>]*>/g, "")}
            layout="responsive"
            objectFit="cover"
            height={post.imageHeight}
            width="680"
            placeholder="blur"
            blurDataURL={post.imagePlaceholder}
          />
          <figcaption dangerouslySetInnerHTML={{ __html: post.imageAlt }} />
        </figure>

        <MDXRemote {...source} lazy components={components} />
      </div>
    </div>
  );
};

export default Post;
