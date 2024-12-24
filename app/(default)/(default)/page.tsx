import BiographyAvatar from "../../../components/biography/BiographyAvatar";
import BiographyCompany from "../../../components/biography/BiographyCompany";
import BiographyLine from "../../../components/biography/BiographyLine";
import BiographySkill from "../../../components/biography/BiographySkill";
import BiographyPost from "../../../components/biography/BiographyPost";
import BiographyTitle from "../../../components/biography/BiographyTitle";
import BiographySubtitle from "../../../components/biography/BiographySubtitle";
import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getPosts } from "../../actions/posts";

export const revalidate = 21600;

export async function generateMetadata() {
  return getMetaData(
    {
      title: "About",
      description:
        "I'm Bruno Sabot, a Front-end developer in Bordeaux. Explore my portfolio and let's build something amazing!",
    },
    "/",
  );
}

export default async function IndexPage() {
  const posts = await getPosts();

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
          <BiographyCompany ex href="https://gdg.community.dev/gdg-bordeaux/">
            GDG Bordeaux
          </BiographyCompany>
        </BiographyLine>
        <BiographyLine>
          <BiographySubtitle>Latest blog posts</BiographySubtitle>
          {posts.slice(0, 3).map((post) => (
            <BiographyPost href={post.path} key={post.path}>
              {post.title}
            </BiographyPost>
          ))}
        </BiographyLine>
      </div>

      <SeoBreadcrumb items={[["Home", "/"]]} />
    </>
  );
}
