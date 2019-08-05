import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Talk.module.css";

const Talk = ({ talk }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.Talk} key={talk.id}>
      <h3 className={styles.Head} onClick={() => setShowVideo(!showVideo)}>
        <div className={styles.Name}>
          <span className={styles.Language}>{talk.language}</span>
          <span className={styles.Conference}>{talk.conference} - </span>
          <span className={styles.Title}>{talk.title}</span>
        </div>
        <span className={styles.Date}>{talk.date}</span>
      </h3>

      {showVideo ? (
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.Video}
          frameBorder="0"
          height="315"
          key={talk.id}
          src={"https://www.youtube.com/embed/" + talk.id}
          title={talk.title}
          width="560"
        ></iframe>
      ) : null}
    </div>
  );
};

Talk.propTypes = {
  talk: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })
};

export default Talk;
