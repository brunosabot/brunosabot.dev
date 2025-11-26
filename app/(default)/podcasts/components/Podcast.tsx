import { AudioLines } from "lucide-react";
import Image from "next/image";

import classNames from "./Podcast.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface IPodcastProps {
  date: Date;
  description: string;
  image?: string;
  lang: string;
  platform: string;
  priority: boolean;
  title: string;
  url: string;
}

export default function Podcast(props: IPodcastProps) {
  return (
    <div className={classNames.Podcast}>
      <div className={classNames.PodcastImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.PodcastImage}
            fill
            priority={props.priority}
            src={props.image}
          />
        ) : null}
      </div>
      <div className={classNames.PodcastContent}>
        <div className={classNames.PodcastGiven}>
          {props.platform} | {dateFormatter.format(props.date)}
        </div>

        <h2 className={classNames.PodcastTitle}>{props.title}</h2>

        <p className={classNames.PodcastDescription}>{props.description}</p>

        <div className={classNames.PodcastLinks}>
          <a
            className={`${classNames.PodcastLink} ${classNames.PodcastListen}`}
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <AudioLines size={20} strokeWidth={1.25} />
            Listen
          </a>
        </div>
      </div>
    </div>
  );
}
