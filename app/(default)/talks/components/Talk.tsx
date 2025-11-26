import { Presentation, SquarePlay } from "lucide-react";
import Image from "next/image";

import classNames from "./Talk.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface ITalkProps {
  conference: string;
  date: Date;
  description: string;
  image?: string;
  lang: string;
  priority: boolean;
  slides: string;
  title: string;
  youtubeId?: string;
}

export default function Talk(props: ITalkProps) {
  return (
    <div className={classNames.Talk}>
      <div className={classNames.TalkImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.TalkImage}
            fill
            priority={props.priority}
            src={props.image}
          />
        ) : null}
      </div>
      <div className={classNames.TalkContent}>
        <div className={classNames.TalkGiven}>
          {props.conference} | {dateFormatter.format(props.date)}
        </div>

        <h2 className={classNames.TalkTitle}>{props.title}</h2>

        <p className={classNames.TalkDescription}>{props.description}</p>

        <div className={classNames.TalkLinks}>
          {props.youtubeId ? (
            <a
              className={`${classNames.TalkLink} ${classNames.TalkVideo}`}
              href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SquarePlay size={20} strokeWidth={1.25} />
              Watch video
            </a>
          ) : null}

          <a
            className={`${classNames.TalkLink} ${classNames.TalkSlides}`}
            href={props.slides}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Presentation size={20} strokeWidth={1.25} />
            View Slides
          </a>
        </div>
      </div>
    </div>
  );
}
