import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Talk.module.css";
import TalkIconSlides from "./TalkIconSlides";
import TalkIconVideo from "./TalkIconVideo";

const Talk = ({ talk }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className={`${styles.Talk} ${typeof talk.id !== "string" ? styles.TalkNoVideo : ""}`}
      key={talk.id}
    >
      <h3 className={styles.Head}>
        <span className={styles.Language}>{talk.language}</span>
        <div className={styles.Name}>
          <span className={styles.Conference}>{talk.conference}</span>
          <span className={styles.Title}>{talk.title}</span>
        </div>
        <span className={styles.Date}>{talk.date}</span>

        <div className={styles.Icons}>
          {typeof talk.id === "string" ? (
            <TalkIconVideo onClick={() => setShowVideo(!showVideo)} />
          ) : null}

          <TalkIconSlides href={talk.slides} />
        </div>
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
  })
};

export default Talk;
