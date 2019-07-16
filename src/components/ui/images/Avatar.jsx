import PropTypes from "prop-types";
import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ alt, src }) => <img className={styles.Avatar} src={src} alt={alt} />;

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Avatar;
