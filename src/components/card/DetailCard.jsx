import PropTypes from "prop-types";
import React from "react";
import "./DetailCard.css";

const DetailCard = ({ url, image, title, description }) => {
  return (
    <a
      className="detail-card"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={image} alt={title} className="detail-card__image" />
      {description.map(d => (
        <p>{d}</p>
      ))}
    </a>
  );
};
DetailCard.defaultProps = {};

DetailCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DetailCard;
