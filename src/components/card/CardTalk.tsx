import React from "react";
import IconFilePresentationBox from "../svg/IconFilePresentationBox";
import IconYoutube from "../svg/IconYoutube";
import Card from "./Card";
import CardAction from "./CardAction";

interface Fixed {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
  width: number;
}

interface Props {
  conferenceName: string;
  date: string;
  id: string;
  image?: string;
  fixed?: Fixed;
  description: string;
  language: string;
  slides: string;
  title: string;
  youtubeId?: string;
}

const CardTalk: React.FC<Props> = ({
  conferenceName,
  date,
  id,
  image,
  fixed,
  description,
  language,
  slides,
  title,
  youtubeId = null,
}) => {
  const actions = (
    <>
      {youtubeId ? (
        <CardAction
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          name="Vidéo du talk"
        >
          <IconYoutube />
        </CardAction>
      ) : null}

      <CardAction href={slides} name="Slides du talk">
        <IconFilePresentationBox />
      </CardAction>
    </>
  );

  return (
    <Card
      icon={language}
      title={title}
      image={image}
      fixed={fixed}
      description={description}
      subtitle={conferenceName}
      date={date}
      key={id}
      actions={actions}
    />
  );
};

export default CardTalk;
