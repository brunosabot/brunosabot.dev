import Image from "next/image";
import Hashtag from "../../../../../generic/common/Hashtag";
import classNames from "./Post.module.css";
import { getRelativeTime } from "../../../../../lib/time";

interface IPostProps {
  image?: string;
  color: string;
  description: string;
  lang: string;
  title: string;
  platform: string;
  date: string;
  to: string;
  priority: boolean;
  tags: string;
}

export default function Post(props: IPostProps) {
  const date = getRelativeTime(props.date);

  return (
    <a className={classNames.Post} href={props.to}>
      <div className={classNames.ImageWrapper}>
        {props.image ? (
          <Image
            src={props.image}
            alt=""
            fill={true}
            className={classNames.Image}
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
