import { mdiYoutube } from "@mdi/js";
import Image from "next/image";

import Svg from "../../../../components/svg/Svg";
import { getDate } from "../../../../lib/time";
import classNames from "./Video.module.css";

interface IVideoProps {
  date: string;
  description: string;
  image?: string;
  lang: string;
  priority: boolean;
  title: string;
  youtubeId: string;
}

export default function Video(props: IVideoProps) {
  const date = getDate(props.date);

  return (
    <div className={classNames.Video}>
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
        <div className={classNames.Given}>Video published on {date}</div>

        <div className={classNames.Links}>
          <a
            className={`${classNames.Link} ${classNames.Youtube}`}
            href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Svg d={mdiYoutube} />
            YouTube video
          </a>
        </div>
      </div>
    </div>
  );
}
