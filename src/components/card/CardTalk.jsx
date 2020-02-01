import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import YoutubeVideo from "../video/YoutubeVideo";
import CardAction from "./CardAction";
import IconYoutube from "../svg/IconYoutube";
import IconFilePresentationBox from "../svg/IconFilePresentationBox";

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
        <CardAction onClick={() => setShowVideo(!showVideo)}>
          <IconYoutube />
        </CardAction>
      ) : null}

      <CardAction href={slides}>
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
