"use client";

import Image from "next/image";
import classNames from "./StreamlineCard.module.css";
import Hashtag from "../../../../generic/common/Hashtag";
import { useState } from "react";

interface IStreamlineCardProps {
  image?: string;
  description: string;
  title: string;
  tags: string[];
  children: React.ReactNode;
  language: string;
  author: string;
}

export default function StreamlineCard(props: IStreamlineCardProps) {
  const [isCodeShown, setIsCodeShown] = useState(false);
  const classList = [classNames.StreamlineCard];

  if (isCodeShown) classList.push(classNames.isOpened);

  return (
    <div className={classList.join(" ")}>
      <div
        className={classNames.Clickable}
        onClick={() => setIsCodeShown(!isCodeShown)}
      >
        <h2 className={classNames.Title}>
          {props.title}
          <span className={classNames.Published}>By {props.author}</span>
        </h2>

        <p className={classNames.Description}>{props.description}</p>

        <div className={classNames.Tags}>
          {props.tags.map((tag) => (
            <Hashtag key={tag}>{tag}</Hashtag>
          ))}
        </div>
      </div>

      {isCodeShown && props.image ? (
        <div className={classNames.ImageWrapper}>
          <Image
            className={classNames.Image}
            src={props.image}
            alt={props.title}
            fill={true}
          />
        </div>
      ) : null}

      {isCodeShown && props.children ? (
        <pre>
          <code
            className={`language-${props.language} ${classNames.Code}`}
            dangerouslySetInnerHTML={{
              __html: props.children,
            }}
          />
        </pre>
      ) : null}
    </div>
  );
}
