import React from "react";
import "./DetailCard.css";

interface Props {
  url: string;
  image: string;
  title: string;
  description: string[];
}

const DetailCard: React.FC<Props> = ({ url, image, title, description }) => {
  return (
    <a
      className="detail-card"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={image} alt={title} className="detail-card__image" />
      {description.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </a>
  );
};

export default DetailCard;
