import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import IconYoutube from "../svg/IconYoutube";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  date: string;
  id: string;
  language: string;
  title: string;
  youtubeId: string;
  image?: string;
  fixed?: IGatsbyImageData;
  description: string;
}

const CardVideo: React.FC<Props> = ({
  date,
  id,
  language,
  title,
  youtubeId,
  image,
  fixed,
  description,
}) => {
  const actions = (
    <>
      <CardAction
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        name="Vidéo du talk"
      >
        <IconYoutube />
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
      subtitle=""
      date={date}
      key={id}
      actions={actions}
    />
  );
};

export default CardVideo;
