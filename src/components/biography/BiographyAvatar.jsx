import PropTypes from "prop-types";
import React from "react";
import "./BiographyAvatar.css";

const BiographyAvatar = ({ alt, src }) => (
  <img className="biography-avatar" src={src} alt={alt} />
);

BiographyAvatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default BiographyAvatar;
