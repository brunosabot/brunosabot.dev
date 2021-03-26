import React from "react";
import IconGithubCircle from "../svg/IconGithubCircle";
import LineCard from "./LineCard";

interface Props {
  name: string;
  url: string;
}

const CardOpensource: React.FC<Props> = ({
  name,
  url,
}) => (
  <LineCard
    icon={<IconGithubCircle />}
    title={name}
    to={url}
  />
);

export default CardOpensource;
