import { mdiPodcast } from "@mdi/js";
import Image from "next/image";

import Svg from "../../../../components/svg/Svg";
import { getDate } from "../../../../lib/time";
import classNames from "./Podcast.module.css";

interface IPodcastProps {
  date: string;
  description: string;
  image?: string;
  lang: string;
  platform: string;
  priority: boolean;
  title: string;
  url: string;
}

export default function Podcast(props: IPodcastProps) {
  const date = getDate(props.date);

  return (
    <div className={classNames.Podcast}>
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
          Published at {props.platform} on {date}
        </div>

        <div className={classNames.Links}>
          <a
            className={classNames.Link}
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Svg d={mdiPodcast} />
            Listen
          </a>
        </div>
      </div>
    </div>
  );
}
