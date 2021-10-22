import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import IconPodcast from "../svg/IconPodcast";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  date: string;
  id: string;
  language: string;
  title: string;
  url: string;
  image?: string;
  fixed?: IGatsbyImageData;
  description: string;
  platform: string;
}

const CardVideo: React.FC<Props> = ({
  date,
  id,
  language,
  title,
  url,
  image,
  fixed,
  description,
  platform,
}) => {
  const actions = (
    <>
      <CardAction href={url} name="Podcast">
        <IconPodcast />
      </CardAction>
    </>
  );

  return (
    <Card
      image={image}
      fixed={fixed}
      description={description}
      icon={language}
      title={title}
      subtitle={platform}
      date={date}
      key={id}
      actions={actions}
    />
  );
};

export default CardVideo;
