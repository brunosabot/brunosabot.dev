import React from "react";
import PropTypes from "prop-types";
import "./YoutubeVideo.css";

const YoutubeVideo = ({ id, title }) => (
  <iframe
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="youtube-video"
    frameBorder="0"
    height="315"
    key={id}
    src={`https://www.youtube.com/embed/${id}`}
    title={title}
    width="560"
  />
);

YoutubeVideo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default YoutubeVideo;
