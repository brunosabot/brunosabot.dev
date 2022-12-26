import { mdiFilePresentationBox, mdiYoutube } from "@mdi/js";
import React from "react";
import { TooltipPosition } from "../modal/WithATooltip";
import Svg from "../svg/Svg";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  conferenceName: string;
  date: string;
  id: string;
  image?: string;
  description: string;
  language: string;
  slides: string;
  title: string;
  youtubeId?: string;
  priority?: boolean;
}

const CardTalk: React.FC<Props> = ({
  conferenceName,
  date,
  id,
  image,
  description,
  language,
  slides,
  title,
  priority = false,
  youtubeId = null,
}) => {
  const actions = (
    <>
      {youtubeId ? (
        <CardAction
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          label={title + " on YouTube"}
          position={TooltipPosition.LEFT}
        >
          <Svg d={mdiYoutube} className="icon-youtube" />
        </CardAction>
      ) : null}

      <CardAction
        href={slides}
        label={title + " on Google Slides"}
        position={TooltipPosition.LEFT}
      >
        <Svg d={mdiFilePresentationBox} className="icon-slides" />
      </CardAction>
    </>
  );

  return (
    <Card
      icon={language}
      title={title}
      image={image}
      description={description}
      subtitle={conferenceName}
      date={date}
      key={id}
      actions={actions}
      priority={priority}
    />
  );
};

export default CardTalk;
