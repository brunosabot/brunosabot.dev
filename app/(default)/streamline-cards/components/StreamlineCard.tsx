"use client";

import SimpleCard from "../../../../components/card/SimpleCard";
import CardTag from "../../../../components/card/CardTag";
import classes from "./StreamlineCard.module.css";
import { useState } from "react";

interface IStreamlineCardProps {
  id: string;
  title: string;
  tags: string[];
  author: string;
  image: string;
  children: string;
  language: string;
}

export default function StreamlineCard({
  id,
  title,
  tags,
  author,
  image,
  children,
  language,
}: IStreamlineCardProps) {
  const [isCodeShown, setIsCodeShown] = useState(false);

  return (
    <SimpleCard key={id}>
      <div
        onClick={() => setIsCodeShown(!isCodeShown)}
        className={classes.Title}
      >
        {title}
        <span className={classes.Author}>by {author}</span>
        {tags.map((tag) => (
          <CardTag tag={tag} key={tag} />
        ))}
      </div>

      {isCodeShown ? (
        <>
          {/* eslint-disable @next/next/no-img-element */}
          {image ? (
            <img
              className={classes.Image}
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
            />
          ) : null}
          {/* eslint-enable @next/next/no-img-element */}
          <pre>
            <code
              className={`language-${language} ${classes.Code}`}
              dangerouslySetInnerHTML={{
                __html: children,
              }}
            />
          </pre>
        </>
      ) : null}
    </SimpleCard>
  );
}
