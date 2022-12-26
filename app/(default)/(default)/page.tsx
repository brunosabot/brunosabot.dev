import BiographyAvatar from "../../../components/biography/BiographyAvatar";
import BiographyCompany from "../../../components/biography/BiographyCompany";
import BiographyLine from "../../../components/biography/BiographyLine";
import BiographySkill from "../../../components/biography/BiographySkill";
import BiographySocial from "../../../components/biography/BiographySocial";
import BiographyPost from "../../../components/biography/BiographyPost";
import BiographyTitle from "../../../components/biography/BiographyTitle";
import {
  mdiCodepen,
  mdiDevTo,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiRss,
  mdiTwitter,
} from "@mdi/js";
import Svg from "../../../components/svg/Svg";
import svgHashnode from "../../../components/svg/hashnode";
import svgMedium from "../../../components/svg/medium";
import svgStrava from "../../../components/svg/strava";
import svgPatreon from "../../../components/svg/patreon";
import svgDiscord from "../../../components/svg/discord";
import svgBuyMeACoffee from "../../../components/svg/buymeacoffee";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BiographySubtitle from "../../../components/biography/BiographySubtitle";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getPosts = () => {
  const posts = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source))
    .sort((a, b) => b.data.date - a.data.date)
    .slice(0, 3)
    .map((post) => ({
      image: post.data.originalImage,
      title: post.data.title,
      date: post.data.date.toString(),
      subtitle: post.data.subtitle,
      platform: post.data.platform,
      lang: post.data.lang,
      path: post.data.path,
    }));

  return posts;
};
export default async function IndexPage() {
  const posts = getPosts();

  return (
    <>
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
          <BiographyCompany href="https://playplay.com/">
            PlayPlay
          </BiographyCompany>
          <BiographyCompany ex href="https://www.bdxio.fr/">
            BDX I/O
          </BiographyCompany>
          <BiographyCompany ex href="https://gdgbordeaux.fr/#/">
            GDG Bordeaux
          </BiographyCompany>
        </BiographyLine>
        <BiographyLine>
          <BiographySubtitle>Latest blog posts</BiographySubtitle>
          {posts.map((post) => (
            <BiographyPost href={post.path} key={post.path}>
              {post.title}
            </BiographyPost>
          ))}
        </BiographyLine>
      </div>
    </>
  );
}
