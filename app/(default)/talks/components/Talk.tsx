import Image from "next/image";
import classNames from "./Talk.module.css";
import { mdiFilePresentationBox, mdiYoutube } from "@mdi/js";
import Svg from "../../../../components/svg/Svg";
import { getDate } from "../../../../lib/time";

interface ITalkProps {
  title: string;
  image?: string;
  description: string;
  lang: string;
  conference: string;
  date: string;
  priority: boolean;
  youtubeId?: string;
  slides: string;
}

export default function Talk(props: ITalkProps) {
  const date = getDate(props.date);

  return (
    <div className={classNames.Talk}>
      <div className={classNames.ImageWrapper}>
        {props.image ? (
          <Image
            src={props.image}
            alt=""
            fill={true}
            className={classNames.Image}
            priority={props.priority}
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
              href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${classNames.Link} ${classNames.Youtube}`}
            >
              <Svg d={mdiYoutube} />
              YouTube video
            </a>
          ) : null}

          <a
            href={props.slides}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classNames.Link} ${classNames.Slides}`}
          >
            <Svg d={mdiFilePresentationBox} />
            Slides
          </a>
        </div>
      </div>
    </div>
  );
}
