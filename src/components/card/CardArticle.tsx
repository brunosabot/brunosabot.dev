import React from "react";
import Card from "./Card";

interface Props {
  id: string;
  date: string;
  href: string;
  language: string;
  platform: string;
  title: string;
}

const CardTalk: React.FC<Props> = ({
  date,
  href,
  id,
  language,
  platform,
  title,
}) => (
  <Card
    date={date}
    icon={language}
    key={id}
    subtitle={platform}
    title={title}
    to={href}
  />
);

export default CardTalk;
