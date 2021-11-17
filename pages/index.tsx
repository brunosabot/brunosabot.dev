import {
  mdiCodepen,
  mdiDevTo,
  mdiDiscord,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiRss,
  mdiTwitter,
} from "@mdi/js";
import React from "react";
import BiographyAvatar from "../components/biography/BiographyAvatar";
import BiographyCompany from "../components/biography/BiographyCompany";
import BiographyLine from "../components/biography/BiographyLine";
import BiographySkill from "../components/biography/BiographySkill";
import Social from "../components/biography/BiographySocial";
import BiographyTitle from "../components/biography/BiographyTitle";
import HomeLayout from "../components/layout/HomeLayout";
import SEO from "../components/Seo";
import svgHashnode from "../components/svg/hashnode";
import svgMedium from "../components/svg/medium";
import svgStrava from "../components/svg/strava";
import Svg from "../components/svg/Svg";

interface Props {
  [key: string]: never;
}

const About: React.FC<Props> = () => (
  <HomeLayout>
    <SEO
      description="I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France."
      title="About"
    />
    <BiographyAvatar />
    <div>
      <BiographyTitle>
        I am Bruno Sabot, a Front-end developer currently living in Bordeaux,
        France.
      </BiographyTitle>
      <BiographyLine>
        <BiographySkill>FrontEnd Developer</BiographySkill>
        <BiographySkill>React</BiographySkill>
        <BiographySkill>Vue.js</BiographySkill>
        <BiographySkill>Node.js</BiographySkill>
        <BiographySkill>HTML</BiographySkill>
        <BiographySkill>CSS</BiographySkill>
        <BiographySkill>Performance</BiographySkill>
        <BiographySkill>UX</BiographySkill>
        <BiographySkill>Home automation</BiographySkill>
      </BiographyLine>
      <BiographyLine>
        <BiographyCompany href="https://www.zenika.com/">
          Zenika
        </BiographyCompany>
        <BiographyCompany href="https://www.bdx.io/">BDX I/O</BiographyCompany>
        <BiographyCompany href="https://gdgbordeaux.fr/">
          GDG Bordeaux
        </BiographyCompany>
      </BiographyLine>
      <BiographyLine>
        <Social href="https://github.com/brunosabot" name="Github">
          <Svg d={mdiGithub} />
        </Social>
        <Social href="https://twitter.com/brunosabot" name="Twitter">
          <Svg d={mdiTwitter} />
        </Social>
        <Social href="https://instagram.com/brunosabot" name="Instagram">
          <Svg d={mdiInstagram} />
        </Social>
        <Social href="https://linkedin.com/in/brunosabot" name="LinkedIn">
          <Svg d={mdiLinkedin} />
        </Social>
        <Social href="https://codepen.io/brunosabot/" name="Codepen">
          <Svg d={mdiCodepen} />
        </Social>
        <Social href="https://medium.com/@brunosabot" name="Medium">
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
          <Svg d={mdiDiscord} />
        </Social>
        <Social href="https://www.strava.com/athletes/15220263" name="Strava">
          <Svg d={svgStrava} />
        </Social>
        <Social href="https://brunosabot.dev/rss.xml" name="RSS">
          <Svg d={mdiRss} />
        </Social>
      </BiographyLine>
    </div>
  </HomeLayout>
);

export default About;
