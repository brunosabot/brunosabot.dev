import Image from "next/image";
import React from "react";
import classes from "./DetailCard.module.css";

interface Props {
  url: string;
  image: string;
  title: string;
  description: string[];
}

const DetailCard: React.FC<Props> = ({ url, image, title, description }) => (
  <a
    className={classes["detail-card"]}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className={classes["detail-card__image"]}>
      <Image src={image} alt={title} height={195} width={400} />
    </div>
    {description.map((d) => (
      <p key={d}>{d}</p>
    ))}
  </a>
);

export default DetailCard;
