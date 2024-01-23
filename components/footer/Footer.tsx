import Social from "./FooterSocial";
import classes from "./Footer.module.css";
import FooterLink from "./FooterLink";
import Svg from "../svg/Svg";
import {
  mdiCodepen,
  mdiDevTo,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiMastodon,
  mdiRss,
  mdiTwitter,
} from "@mdi/js";
import svgStrava from "../svg/strava";
import svgMedium from "../svg/medium";
import svgHashnode from "../svg/hashnode";
import svgPatreon from "../svg/patreon";
import svgDiscord from "../svg/discord";
import svgBuyMeACoffee from "../svg/buymeacoffee";
import { SITE_METADATA } from "../../lib/metadata";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContent}>
        <FooterLink to="/">About</FooterLink>
        <FooterLink to="/posts/">Posts</FooterLink>
        <FooterLink to="/talks/">Talks</FooterLink>
        <FooterLink to="/opensource/">Open source</FooterLink>
        <FooterLink to="/projects/">Projects</FooterLink>
        <FooterLink to="/podcasts/">Podcasts</FooterLink>
        <FooterLink to="/videos/">Videos</FooterLink>
        <FooterLink to="/tools/">Tools</FooterLink>
        <FooterLink to="/resume/en/">Resume</FooterLink>
        <FooterLink to="/contact/">Contact</FooterLink>
      </div>
      <div className={classes.FooterSocial}>
        <Social href="https://github.com/brunosabot" name="Github">
          <Svg d={mdiGithub} />
        </Social>
        <Social href="https://twitter.com/brunosabot" name="Twitter">
          <Svg d={mdiTwitter} />
        </Social>
        <Social
          href="https://mastodon.social/@brunosabot"
          name="Mastodon"
          rel="me"
        >
          <Svg d={mdiMastodon} />
        </Social>
        <Social href="https://instagram.com/brunosabot" name="Instagram">
          <Svg d={mdiInstagram} />
        </Social>
        <Social href="https://linkedin.com/in/brunosabot" name="LinkedIn">
          <Svg d={mdiLinkedin} />
        </Social>
        <Social
          href="https://www.buymeacoffee.com/brunosabot1"
          name="Buy Me A Coffee"
        >
          <Svg d={svgBuyMeACoffee} />
        </Social>
        <Social
          href="https://www.patreon.com/brunosabot?fan_landing=true"
          name="Patreon"
        >
          <Svg d={svgPatreon} />
        </Social>
        <Social href="https://codepen.io/brunosabot/" name="Codepen">
          <Svg d={mdiCodepen} />
        </Social>
        <Social href="https://medium.brunosabot.dev" name="Medium">
          <Svg d={svgMedium} />
        </Social>
        <Social href="https://dev.to/brunosabot" name="Dev.to">
          <Svg d={mdiDevTo} />
        </Social>
        <Social href="https://hashnode.com/@brunosabot" name="Hashnode">
          <Svg
            d={svgHashnode}
            pathAttributes={{ fillRule: "evenodd", clipRule: "evenodd" }}
          />
        </Social>
        <Social href="https://discord.gg/NSZFSdr9BW" name="Discord">
          <Svg d={svgDiscord} />
        </Social>
        <Social href="https://www.strava.com/athletes/15220263" name="Strava">
          <Svg d={svgStrava} />
        </Social>
        <Social href={`${SITE_METADATA.siteUrl}/rss.xml`} name="RSS">
          <Svg d={mdiRss} />
        </Social>
      </div>
    </footer>
  );
};

export default Footer;
