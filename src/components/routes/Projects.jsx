import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import styles from "./Projects.module.css";

const Projects = () => {
  const { values } = useContext(AppContext);

  return values.page === "projects" ? (
    <div className={styles.Projects}>
      <div className={styles.Project}>
        <a
          className={styles.ProjectLink}
          href="https://play.google.com/store/apps/details?id=com.answwr.android"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/answwr.png" alt="Answwr" className={styles.Image} />
        </a>
        <p>
          Answwr is a cool and modern decision maker, so cool that you’d think there is an AI
          managing the thing.
        </p>
        <p>
          With Answwr you’ll be able to decide between choices in the most elegant ways, meaning
          you’ll have to fill a bunch of forms, hit a green button and generate a totally fair and
          unbiased random result.
        </p>
        <p>
          It's important to precise the result will be totally fair and unbiased, that's why we made
          the Redo button.
        </p>
        <a
          className={styles.Play}
          href="https://play.google.com/store/apps/details?id=com.answwr.android&utm_source=brunosabot-website&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Get it on Google Play"
            className={styles.Image}
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
          />
        </a>
      </div>
    </div>
  ) : null;
};

Projects.propTypes = {};

export default Projects;
