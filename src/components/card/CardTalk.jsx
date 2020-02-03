import PropTypes from "prop-types";
import React, { useState } from "react";
import IconFilePresentationBox from "../svg/IconFilePresentationBox";
import IconYoutube from "../svg/IconYoutube";
import YoutubeVideo from "../video/YoutubeVideo";
import Card from "./Card";
import CardAction from "./CardAction";

const CardTalk = ({
  conferenceName,
  date,
  id,
  language,
  slides,
  title,
  youtubeId
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
      {showVideo ? <YoutubeVideo id={youtubeId} title={title} /> : null}
    </Card>
  );
};

CardTalk.defaultProps = {
  youtubeId: null
};

CardTalk.propTypes = {
  conferenceName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  slides: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  youtubeId: PropTypes.string
};

export default CardTalk;
