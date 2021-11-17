import { mdiPodcast } from "@mdi/js";
import React from "react";
import Svg from "../svg/Svg";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  date: string;
  id: string;
  language: string;
  title: string;
  url: string;
  image?: string;
  description: string;
  platform: string;
  priority?: boolean;
}

const CardVideo: React.FC<Props> = ({
  date,
  id,
  language,
  title,
  url,
  image,
  description,
  platform,
  priority = false,
}) => {
  const actions = (
    <>
      <CardAction href={url} name="Podcast">
        <Svg d={mdiPodcast} />
      </CardAction>
    </>
  );

  return (
    <Card
      image={image}
      description={description}
      icon={language}
      title={title}
      subtitle={platform}
      date={date}
      key={id}
      actions={actions}
      priority={priority}
    />
  );
};

export default CardVideo;
