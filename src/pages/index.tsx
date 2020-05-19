import { graphql } from "gatsby";
import React from "react";
import BiographyAvatar from "../components/biography/BiographyAvatar";
import BiographyCompany from "../components/biography/BiographyCompany";
import BiographyLine from "../components/biography/BiographyLine";
import BiographySkill from "../components/biography/BiographySkill";
import Social from "../components/biography/BiographySocial";
import BiographyTitle from "../components/biography/BiographyTitle";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";
import IconCodepen from "../components/svg/IconCodepen";
import IconGithubCircle from "../components/svg/IconGithubCircle";
import IconInstagram from "../components/svg/IconInstagram";
import IconLinkedinBox from "../components/svg/IconLinkedinBox";
import IconMedium from "../components/svg/IconMedium";
import IconStrava from "../components/svg/IconStrava";
import IconTwitter from "../components/svg/IconTwitter";

export const query = graphql`
  query {
    file(relativePath: { eq: "brunosabot.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

interface Fixed {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
  width: number;
}

interface Image {
  fixed: Fixed;
}

interface File {
  childImageSharp: Image;
}

interface Data {
  file: File;
}

interface Props {
  data: Data;
}

const About: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO
        description="I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France."
        title="About - Bruno Sabot"
      />
      <main
        className="content"
        style={{
          textAlign: "center",
          margin: "auto",
          maxWidth: "500px",
          paddingTop: "32px",
        }}
      >
        <BiographyAvatar
          fixed={data.file.childImageSharp.fixed}
          alt="Bruno Sabot"
        />
        <div>
          <BiographyTitle style={{ animationDelay: `0.2s` }}>
            I am Bruno Sabot, a Front-end developer currently living in
            Bordeaux, France.
          </BiographyTitle>
          <BiographyLine style={{ animationDelay: `0.26s` }}>
            <BiographySkill>FrontEnd Developer</BiographySkill>
            <BiographySkill>React</BiographySkill>
            <BiographySkill>Vue.js</BiographySkill>
            <BiographySkill>HTML</BiographySkill>
            <BiographySkill>CSS</BiographySkill>
            <BiographySkill>Performance</BiographySkill>
            <BiographySkill>UX</BiographySkill>
          </BiographyLine>
          <BiographyLine style={{ animationDelay: `0.34s` }}>
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
          <BiographyLine style={{ animationDelay: `0.44s` }}>
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
            <Social
              href="https://www.strava.com/athletes/15220263"
              name="Strava"
            >
              <IconStrava />
            </Social>
          </BiographyLine>
        </div>
      </main>
    </Layout>
  );
};

export default About;
