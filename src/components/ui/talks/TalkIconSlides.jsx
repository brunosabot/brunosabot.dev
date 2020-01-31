import PropTypes from "prop-types";
import React from "react";
import styles from "./Talk.module.css";

const TalkIconSlides = ({ href }) => {
  return (
    <a href={href} className={styles.Icon} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" className={styles.SlidesIcon}>
        <path d="M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>
    </a>
  );
};

TalkIconSlides.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TalkIconSlides;
