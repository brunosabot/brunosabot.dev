import React from "react";
import Social from "./FooterSocial";
import IconCodepen from "../svg/IconCodepen";
import IconGithubCircle from "../svg/IconGithubCircle";
import IconInstagram from "../svg/IconInstagram";
import IconLinkedinBox from "../svg/IconLinkedinBox";
import IconMedium from "../svg/IconMedium";
import IconStrava from "../svg/IconStrava";
import IconTwitter from "../svg/IconTwitter";
import IconRss from "../svg/IconRss";
import classes from "./Footer.module.css";
import FooterLink from "./FooterLink";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__content"]}>
        <FooterLink to="/">About</FooterLink>
        <FooterLink to="/posts/">Posts</FooterLink>
        <FooterLink to="/talks/">Talks</FooterLink>
        <FooterLink to="/opensource/">Open source</FooterLink>
        <FooterLink to="/projects/">Projects</FooterLink>
        <FooterLink to="/podcasts/">Podcasts</FooterLink>
        <FooterLink to="/videos/">Videos</FooterLink>
        <FooterLink to="/resume/en/">Resume</FooterLink>
      </div>
      <div className={classes["footer__social"]}>
        <Social href="https://github.com/brunosabot" name="Github">
          <IconGithubCircle />
        </Social>
        <Social href="https://twitter.com/brunosabot" name="Twitter">
          <IconTwitter />
        </Social>
        <Social href="https://instagram.com/brunosabot" name="Instagram">
          <IconInstagram />
        </Social>
        <Social href="https://linkedin.com/in/brunosabot" name="LinkedIn">
          <IconLinkedinBox />
        </Social>
        <Social href="https://codepen.io/brunosabot/" name="Codepen">
          <IconCodepen />
        </Social>
        <Social href="https://medium.com/@brunosabot" name="Medium">
          <IconMedium />
        </Social>
        <Social href="https://www.strava.com/athletes/15220263" name="Strava">
          <IconStrava />
        </Social>
        <Social href="https://brunosabot.dev/rss.xml" name="RSS">
          <IconRss />
        </Social>
      </div>
    </footer>
  );
};

export default Footer;
