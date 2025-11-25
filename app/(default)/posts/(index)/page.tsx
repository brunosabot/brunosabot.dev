import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../generic/typography/Title";
import { getMetaData } from "../../../../lib/metadata";
import { getPosts } from "../../../actions/posts";
import Posts from "./_components/Posts";

export const revalidate = 21600;

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Learn dev, React, JavaScript, Git, and more! Explore Bruno Sabot's blog for insights on coding, performance, home automation, and more.",
      title: "Posts",
    },
    "/posts/",
  );
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <Title>Musings & Code</Title>
      <ParagraphSecondary>
        A collection of thoughts on software engineering, leadership, and random
        discoveries.
      </ParagraphSecondary>
      <Posts posts={posts} />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Posts", "/posts/"],
        ]}
      />
    </>
  );
}
