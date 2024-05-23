import BiographyAvatar from "../../../components/biography/BiographyAvatar";
import BiographyCompany from "../../../components/biography/BiographyCompany";
import BiographyLine from "../../../components/biography/BiographyLine";
import BiographySkill from "../../../components/biography/BiographySkill";
import BiographyPost from "../../../components/biography/BiographyPost";
import BiographyTitle from "../../../components/biography/BiographyTitle";
import BiographySubtitle from "../../../components/biography/BiographySubtitle";
import { Post } from "../../../lib/notion";
import { getMetaData } from "../../../lib/metadata";

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

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
    next: { revalidate: 3600 },
  });
  const posts = (await response.json()) as Post[];

  return posts.slice(0, 3);
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
    </>
  );
}
