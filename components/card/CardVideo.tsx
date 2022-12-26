import { mdiYoutube } from "@mdi/js";
import React from "react";
import { TooltipPosition } from "../modal/WithATooltip";
import Svg from "../svg/Svg";
import Card from "./Card";
import CardAction from "./CardAction";

interface Props {
  date: string;
  id: string;
  language: string;
  title: string;
  youtubeId: string;
  image?: string;
  description: string;
  priority?: boolean;
}

const CardVideo: React.FC<Props> = ({
  date,
  id,
  language,
  title,
  youtubeId,
  image,
  description,
  priority = false,
}) => {
  const actions = (
    <CardAction
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      label="View the video on YouTube"
      position={TooltipPosition.LEFT}
    >
      <Svg d={mdiYoutube} className="icon-youtube" />
    </CardAction>
  );

  return (
    <Card
      image={image}
      description={description}
      icon={language}
      title={title}
      subtitle=""
      date={date}
      key={id}
      actions={actions}
      priority={priority}
    />
  );
};

export default CardVideo;
