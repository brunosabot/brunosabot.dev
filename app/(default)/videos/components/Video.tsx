import Image from "next/image";
import classNames from "./Video.module.css";
import { mdiYoutube } from "@mdi/js";
import Svg from "../../../../components/svg/Svg";
import { getDate } from "../../../../lib/time";

interface IVideoProps {
  title: string;
  image?: string;
  description: string;
  lang: string;
  date: string;
  priority: boolean;
  youtubeId: string;
}

export default function Video(props: IVideoProps) {
  const date = getDate(props.date);

  return (
    <div className={classNames.Video}>
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
        <div className={classNames.Given}>Video published on {date}</div>

        <div className={classNames.Links}>
          <a
            href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classNames.Link} ${classNames.Youtube}`}
          >
            <Svg d={mdiYoutube} />
            YouTube video
          </a>
        </div>
      </div>
    </div>
  );
}
