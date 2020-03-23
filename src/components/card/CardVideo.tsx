import React, { useState } from "react";
import IconYoutube from "../svg/IconYoutube";
import YoutubeVideo from "../video/YoutubeVideo";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  date: string;
  id: string;
  language: string;
  title: string;
  youtubeId: string;
}

const CardTalk: React.FC<Props> = ({
  date,
  id,
  language,
  title,
  youtubeId,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const actions = (
    <>
      <CardAction onClick={() => setShowVideo(!showVideo)} name="Vidéo du talk">
        <IconYoutube />
      </CardAction>
    </>
  );

  return (
    <Card
      icon={language}
      title={title}
      subtitle={""}
      date={date}
      key={id}
      actions={actions}
    >
      {showVideo ? <YoutubeVideo id={youtubeId} title={title} /> : null}
    </Card>
  );
};

export default CardTalk;
