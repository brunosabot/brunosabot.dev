import Img from "gatsby-image";
import React from "react";
import "./DetailCard.css";

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
  url: string;
  image: Fixed;
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
      <Img fixed={image} alt={title} className="detail-card__image" />
      {description.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </a>
  );
};

export default DetailCard;
