import React from "react";
import useSeo from "../hooks/useSeo";
import { ReactComponent as Codepen } from "../svg/codepen.svg";
import { ReactComponent as GithubCircle } from "../svg/github-circle.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as LinkedinBox } from "../svg/linkedin-box.svg";
import { ReactComponent as Medium } from "../svg/medium.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import Avatar from "../ui/images/Avatar";
import styles from "./About.module.css";

const About = () => {
  useSeo(
    "About - Bruno Sabot",
    "About Bruno Sabot, a FrontEnd Developer enjoying React, Vue.js, HTML, CSS, Performance and UX"
  );

  return (
    <>
      <div className={styles.About}>
        <Avatar src="/images/brunosabot.jpg" alt="Bruno Sabot" />
        <div className={styles.Biography}>
          <div className={styles.BiographyLine}>
            <span className={styles.BiographySkill}>{` FrontEnd Developer `}</span>
            <span className={styles.BiographySkill}>{` React `}</span>
            <span className={styles.BiographySkill}>{` Vue.js `}</span>
            <span className={styles.BiographySkill}>{` HTML `}</span>
            <span className={styles.BiographySkill}>{` CSS `}</span>
            <span className={styles.BiographySkill}>{` Performance `}</span>
            <span className={styles.BiographySkill}>{` UX `}</span>
          </div>
          <div className={styles.BiographyLine}>
            <a className={styles.BiographyLink} href="https://www.zenika.com/">
              {` Zenika `}
            </a>
            <a className={styles.BiographyLink} href="https://www.bdx.io/">
              {` BDX I/O `}
            </a>
            <a className={styles.BiographyLink} href="https://gdgbordeaux.fr/">
              {` GDG Bordeaux `}
            </a>
          </div>
          <div className={styles.BiographyLine}>
            <a
              className={styles.Social}
              href="https://github.com/brunosabot"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bruno Sabot on Github"
            >
              <GithubCircle className={styles.SocialIcon} />
            </a>
            <a
              className={styles.Social}
              href="https://twitter.com/brunosabot"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bruno Sabot on Twitter"
            >
              <Twitter className={styles.SocialIcon} />
            </a>
            <a
              className={styles.Social}
              href="https://instagram.com/brunosabot"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bruno Sabot on Instagram"
            >
              <Instagram className={styles.SocialIcon} />
            </a>
            <a
              className={styles.Social}
              href="https://linkedin.com/in/brunosabot"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bruno Sabot on LinkedIn"
            >
              <LinkedinBox className={styles.SocialIcon} />
            </a>
            <a
              className={styles.Social}
              href="https://codepen.io/brunosabot/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bruno Sabot on Codepen"
            >
              <Codepen className={styles.SocialIcon} />
            </a>
            <a
              className={styles.Social}
              href="https://medium.com/@brunosabot"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bruno Sabot on Medium"
            >
              <Medium className={styles.SocialIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {};

export default About;
