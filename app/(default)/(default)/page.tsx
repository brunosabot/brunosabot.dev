import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getMetaData } from "../../../lib/metadata";
import { getPosts } from "../../actions/posts";
import CallToAction from "./_components/CallToAction";
import HeroSection from "./_components/HeroSection";
import Intro from "./_components/Intro";
import LinkTag from "./_components/LinkTag";
import Picture from "./_components/Picture";
import Post from "./_components/Post";
import PostContainer from "./_components/PostContainer";
import Project from "./_components/Project";
import ProjectContainer from "./_components/ProjectContainer";
import Section from "./_components/Section";
import SectionTitle from "./_components/SectionTitle";
import TagGroup from "./_components/TagGroup";
import ToolkitAbstract from "./_components/ToolkitAbstract";
import ToolkitContainer from "./_components/ToolkitContainer";

export const revalidate = 21600;

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Hi, I'm Bruno, a Engineering Manager at PlayPlay with a passion for home automation. This page showcases my skills, including React, Vue.js and web performance, and features my latest blog posts.",
      title:
        "Bruno Sabot - Software Engineer | Front-end Development| Home Automation ",
    },
    "/",
  );
}

export default async function IndexPage() {
  const posts = await getPosts();

  return (
    <>
      <HeroSection>
        <Picture />
        <Intro />
        <CallToAction />
      </HeroSection>

      <Section index={0}>
        <SectionTitle>Latest scribbles</SectionTitle>
        <PostContainer>
          {posts.slice(0, 3).map((post, i) => (
            <Post
              date={new Date(post.date)}
              description={post.subtitle}
              href={post.path}
              image={post.originalImage}
              index={i}
              key={post.path}
              title={post.title}
            />
          ))}
        </PostContainer>
      </Section>

      <Section index={1}>
        <SectionTitle>My toolkit</SectionTitle>

        <ToolkitContainer abstract={<ToolkitAbstract />}>
          <TagGroup title="Languages &amp; Frameworks">
            <LinkTag href="/tags/JavaScript">JavaScript</LinkTag>
            <LinkTag href="/tags/React">React</LinkTag>
            <LinkTag href="/tags/VueJS">Vue.js</LinkTag>
            <LinkTag href="/tags/Node.js">Node.js</LinkTag>
            <LinkTag href="/tags/NextJS">NextJS</LinkTag>
          </TagGroup>
          <TagGroup title="Others">
            <LinkTag href="/tags/Home%20Automation">Home automation</LinkTag>
            <LinkTag href="/tags/Software%20Engineeering">
              Software Engineering
            </LinkTag>
            <LinkTag href="/tags/Webperf">Webperf</LinkTag>
            <LinkTag href="/tags/UX">UX</LinkTag>
            <LinkTag href="/tags/Testing">Testing</LinkTag>
            <LinkTag href="/tags/CICD">CI/CD</LinkTag>
          </TagGroup>
        </ToolkitContainer>
      </Section>

      <Section index={2}>
        <SectionTitle>Things to check out</SectionTitle>
        <ProjectContainer>
          <Project
            description="A Home Assistant card for to streamline your configuration."
            href="https://github.com/brunosabot/streamline-card"
            title="Streamline Card"
          />
          <Project
            description="A collection of Home Assistant templates to streamline your configuration."
            href="/streamline-cards"
            title="Streamline Templates"
          />
          <Project
            description="An Android app to help you make decisions."
            href="https://www.answwr.com/"
            title="Answwr"
          />
        </ProjectContainer>
      </Section>

      <SeoBreadcrumb items={[["Home", "/"]]} />
    </>
  );
}
