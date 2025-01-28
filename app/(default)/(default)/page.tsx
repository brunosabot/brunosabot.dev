import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getMetaData } from "../../../lib/metadata";
import { getPosts } from "../../actions/posts";
import Link from "./components/Link";
import Post from "./components/Post";
import Heading from "./components/Heading";
import Section from "../../../generic/layout/Bloc";
import Title from "../../../generic/typography/Title";

export const revalidate = 21600;

export async function generateMetadata() {
  return getMetaData(
    {
      title:
        "Bruno Sabot - Software Engineer | Front-end Development| Home Automation ",
      description:
        "Hi, I'm Bruno, a Staff Software Engineer at PlayPlay with a passion for home automation. This page showcases my skills, including React, Vue.js and web performance, and features my latest blog posts.",
    },
    "/",
  );
}

export default async function IndexPage() {
  const posts = await getPosts();

  return (
    <>
      <Section>
        <Heading />
      </Section>

      <Section>
        <Title>Latest writings</Title>
        {posts.slice(0, 3).map((post) => (
          <Post href={post.path} key={post.path}>
            {post.title}
          </Post>
        ))}
      </Section>

      <Section>
        <Title>Main skills</Title>

        <Link href="/tags/Home%20Automation">Home automation</Link>
        <Link href="/tags/Software%20Engineeering">Software Engineering</Link>
        <Link href="/tags/React">React</Link>
        <Link href="/tags/VueJS">Vue.js</Link>
        <Link href="/tags/Node">Node.js</Link>
        <Link href="/tags/Webperf">Webperf</Link>
        <Link href="/tags/UX">User eXperience</Link>
      </Section>

      <Section>
        <Title>Worth Exploring</Title>

        <Post href="https://medium.brunosabot.dev/">My Medium home page</Post>
        <Post href="https://github.com/brunosabot/streamline-card">
          Streamline Card: A Home Assistant Card
        </Post>
        <Post href="/streamline-cards">My Streamline Card templates</Post>
        <Post href="https://www.answwr.com/">
          Answwr, my cool decision making Android app
        </Post>
      </Section>

      <SeoBreadcrumb items={[["Home", "/"]]} />
    </>
  );
}
