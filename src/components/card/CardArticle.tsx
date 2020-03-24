import React from "react";
import Card from "./Card";

interface Props {
  id: string;
  date: string;
  href: string;
  image: string;
  language: string;
  platform: string;
  title: string;
  description: string;
}

const CardArticle: React.FC<Props> = ({
  date,
  href,
  id,
  image,
  language,
  platform,
  title,
  description,
}) => (
  <Card
    date={date}
    icon={language}
    key={id}
    image={image}
    subtitle={platform}
    title={title}
    description={description}
    to={href}
  />
);

export default CardArticle;
