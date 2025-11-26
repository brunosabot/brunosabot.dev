import { SquarePlay } from "lucide-react";
import Image from "next/image";

import classNames from "./Video.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

interface IVideoProps {
  date: Date;
  description: string;
  image?: string;
  lang: string;
  priority: boolean;
  title: string;
  youtubeId: string;
}

export default function Video(props: IVideoProps) {
  return (
    <div className={classNames.Video}>
      <div className={classNames.VideoImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.VideoImage}
            fill
            priority={props.priority}
            src={props.image}
          />
        ) : null}
      </div>
      <div className={classNames.VideoContent}>
        <div className={classNames.VideoGiven}>
          Video published on {dateFormatter.format(props.date)}
        </div>

        <h2 className={classNames.VideoTitle}>{props.title}</h2>

        <p className={classNames.VideoDescription}>{props.description}</p>

        <div className={classNames.VideoLinks}>
          <a
            className={`${classNames.VideoLink} ${classNames.VideoYoutube}`}
            href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SquarePlay size={20} strokeWidth={1.25} />
            Watch video
          </a>
        </div>
      </div>
    </div>
  );
}
