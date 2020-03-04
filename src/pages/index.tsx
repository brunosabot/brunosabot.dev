import React from "react";
import BiographyAvatar from "../components/biography/BiographyAvatar";
import BiographyCompany from "../components/biography/BiographyCompany";
import BiographyLine from "../components/biography/BiographyLine";
import BiographySkill from "../components/biography/BiographySkill";
import Social from "../components/biography/BiographySocial";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import IconCodepen from "../components/svg/IconCodepen";
import IconGithubCircle from "../components/svg/IconGithubCircle";
import IconInstagram from "../components/svg/IconInstagram";
import IconLinkedinBox from "../components/svg/IconLinkedinBox";
import IconMedium from "../components/svg/IconMedium";
import IconTwitter from "../components/svg/IconTwitter";

const About: React.FC<{}> = () => {
  return (
    <Layout>
      <SEO
        description="About Bruno Sabot, a FrontEnd Developer enjoying React, Vue.js, HTML, CSS, Performance and UX"
        title="About - Bruno Sabot"
      />
      <main style={{ textAlign: "center", margin: "auto", maxWidth: "400px" }}>
        <BiographyAvatar src="/images/brunosabot.jpg" alt="Bruno Sabot" />
        <div>
          <BiographyLine>
            <BiographySkill>FrontEnd Developer</BiographySkill>
            <BiographySkill>React</BiographySkill>
            <BiographySkill>Vue.js</BiographySkill>
            <BiographySkill>HTML</BiographySkill>
            <BiographySkill>CSS</BiographySkill>
            <BiographySkill>Performance</BiographySkill>
            <BiographySkill>UX</BiographySkill>
          </BiographyLine>
          <BiographyLine>
            <BiographyCompany href="https://www.zenika.com/">
              Zenika
            </BiographyCompany>
            <BiographyCompany href="https://www.bdx.io/">
              BDX I/O
            </BiographyCompany>
            <BiographyCompany href="https://gdgbordeaux.fr/">
              GDG Bordeaux
            </BiographyCompany>
          </BiographyLine>
          <BiographyLine>
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
          </BiographyLine>
        </div>
      </main>
    </Layout>
  );
};

export default About;
