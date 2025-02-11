import Image from "next/image";
import classNames from "./Podcast.module.css";
import { mdiFilePresentationBox, mdiPodcast, mdiYoutube } from "@mdi/js";
import Svg from "../../../../components/svg/Svg";
import { getDate } from "../../../../lib/time";

interface IPodcastProps {
  title: string;
  image?: string;
  description: string;
  lang: string;
  platform: string;
  date: string;
  priority: boolean;
  url: string;
}

export default function Podcast(props: IPodcastProps) {
  const date = getDate(props.date);

  return (
    <div className={classNames.Podcast}>
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
          Published at {props.platform} on {date}
        </div>

        <div className={classNames.Links}>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames.Link}
          >
            <Svg d={mdiPodcast} />
            Listen
          </a>
        </div>
      </div>
    </div>
  );
}
