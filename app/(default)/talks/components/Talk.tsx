import { mdiFilePresentationBox, mdiYoutube } from "@mdi/js";
import Image from "next/image";

import Svg from "../../../../components/svg/Svg";
import { getDate } from "../../../../lib/time";
import classNames from "./Talk.module.css";

interface ITalkProps {
  conference: string;
  date: string;
  description: string;
  image?: string;
  lang: string;
  priority: boolean;
  slides: string;
  title: string;
  youtubeId?: string;
}

export default function Talk(props: ITalkProps) {
  const date = getDate(props.date);

  return (
    <div className={classNames.Talk}>
      <div className={classNames.ImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.Image}
            fill={true}
            priority={props.priority}
            src={props.image}
          />
        ) : null}
      </div>
      <div>
        <h2 className={classNames.Title}>{props.title}</h2>

        <p className={classNames.Description}>{props.description}</p>
        <div className={classNames.Given}>
          Talk given at {props.conference} on {date}
        </div>

        <div className={classNames.Links}>
          {props.youtubeId ? (
            <a
              className={`${classNames.Link} ${classNames.Youtube}`}
              href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Svg d={mdiYoutube} />
              YouTube video
            </a>
          ) : null}

          <a
            className={`${classNames.Link} ${classNames.Slides}`}
            href={props.slides}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Svg d={mdiFilePresentationBox} />
            Slides
          </a>
        </div>
      </div>
    </div>
  );
}
