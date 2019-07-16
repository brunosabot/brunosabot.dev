import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import { ReactComponent as Codepen } from "../svg/codepen.svg";
import { ReactComponent as GithubCircle } from "../svg/github-circle.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as LinkedinBox } from "../svg/linkedin-box.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import Avatar from "../ui/images/Avatar";
import styles from "./About.module.css";

const About = () => {
  const { values } = useContext(AppContext);

  return values.page === "about" ? (
    <div className={styles.About}>
      <Avatar src="/images/brunosabot.jpg" alt="Bruno Sabot" />
      <div className={styles.Biography}>
        <div className={styles.BiographyLine}>
          <span className={styles.BiographyEmoji} role="img" aria-label="Skills">
            🚀
          </span>
          <span className={styles.BiographySkill}>{` FrontEnd Developer `}</span>-
          <span className={styles.BiographySkill}>{` React `}</span>-
          <span className={styles.BiographySkill}>{` Vue.js `}</span>-
          <span className={styles.BiographySkill}>{` HTML `}</span>-
          <span className={styles.BiographySkill}>{` CSS `}</span>-
          <span className={styles.BiographySkill}>{` Performance `}</span>-
          <span className={styles.BiographySkill}>{` UX `}</span>
        </div>
        <div className={styles.BiographyLine}>
          <span className={styles.BiographyEmoji} role="img" aria-label="Skills">
            🏡
          </span>
          <a className={styles.BiographyLink} href="https://www.zenika.com/">
            {` Zenika `}
          </a>
          -
          <a className={styles.BiographyLink} href="https://www.bdx.io/">
            {` BDX I/O `}
          </a>
          -
          <a className={styles.BiographyLink} href="https://gdgbordeaux.fr/">
            {` GDG Bordeaux `}
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/brunosabot"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Bruno Sabot on Github"
        >
          <GithubCircle className={styles.Social} />
        </a>
        <a
          href="https://twitter.com/brunosabot"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Bruno Sabot on Twitter"
        >
          <Twitter className={styles.Social} />
        </a>
        <a
          href="https://instagram.com/brunosabot"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Bruno Sabot on Instagram"
        >
          <Instagram className={styles.Social} />
        </a>
        <a
          href="https://linkedin.com/in/brunosabot"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Bruno Sabot on LinkedIn"
        >
          <LinkedinBox className={styles.Social} />
        </a>
        <a
          href="https://codepen.io/brunosabot/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Bruno Sabot on Codepen"
        >
          <Codepen className={styles.Social} />
        </a>
      </div>
    </div>
  ) : null;
};

About.propTypes = {};

export default About;
