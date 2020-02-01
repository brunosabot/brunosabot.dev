import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardTalk = ({ date, href, id, language, platform, title }) => (
  <Card
    date={date}
    icon={language}
    key={id}
    subtitle={platform}
    title={title}
    to={href}
  />
);

CardTalk.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CardTalk;
