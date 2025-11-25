import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import Title from "../../../../generic/typography/Title";
import { getMetaData } from "../../../../lib/metadata";
import { getPosts } from "../../../actions/posts";
import List from "./components/List";
import Post from "./components/Post";

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
      <Title>Post list</Title>
      <List>
        {posts.map((post, index) => (
          <Post
            color={post.color}
            date={post.date}
            description={post.subtitle}
            image={post.originalImage}
            key={index}
            lang={post.lang}
            platform={post.platform}
            priority={index === 0}
            tags={post.tags}
            title={post.title}
            to={post.path}
          />
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Posts", "/posts/"],
        ]}
      />
    </>
  );
}
