import React from "react";
import "./YoutubeVideo.css";

interface Props {
  id: string;
  title: string;
}

const YoutubeVideo: React.FC<Props> = ({ id, title }) => (
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

export default YoutubeVideo;
