import Image from "next/image";

import Hashtag from "../../../../../generic/common/Hashtag";
import { getRelativeTime } from "../../../../../lib/time";
import classNames from "./Post.module.css";

interface IPostProps {
  color: string;
  date: string;
  description: string;
  image?: string;
  lang: string;
  platform: string;
  priority: boolean;
  tags: string;
  title: string;
  to: string;
}

export default function Post(props: IPostProps) {
  const date = getRelativeTime(props.date);

  return (
    <a className={classNames.Post} href={props.to}>
      <div className={classNames.ImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.Image}
            fill={true}
            src={props.image}
          />
        ) : null}
      </div>
      <div>
        <h2 className={classNames.Title}>{props.title}</h2>

        <p className={classNames.Description}>{props.description}</p>
        <div className={classNames.Tags}>
          {props.tags.split(",").map((tag) => (
            <Hashtag key={tag}>{tag}</Hashtag>
          ))}
        </div>
        <div className={classNames.Published}>
          {props.platform
            ? `First published on ${props.platform} ${date}.`
            : `Published on ${date}.`}
        </div>
      </div>
    </a>
  );
}
