import React, { useState } from "react";
import IconFilePresentationBox from "../svg/IconFilePresentationBox";
import IconYoutube from "../svg/IconYoutube";
import YoutubeVideo from "../video/YoutubeVideo";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  conferenceName: string;
  date: string;
  id: string;
  language: string;
  slides: string;
  title: string;
  youtubeId?: string;
}

const CardTalk: React.FC<Props> = ({
  conferenceName,
  date,
  id,
  language,
  slides,
  title,
  youtubeId = null,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const actions = (
    <>
      {youtubeId ? (
        <CardAction
          onClick={() => setShowVideo(!showVideo)}
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
      subtitle={conferenceName}
      date={date}
      key={id}
      actions={actions}
    >
      {showVideo && youtubeId ? (
        <YoutubeVideo id={youtubeId} title={title} />
      ) : null}
    </Card>
  );
};

export default CardTalk;
