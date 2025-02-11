import { formatDistanceToNow } from "date-fns";
import { getMetaData } from "../../../../lib/metadata";
import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import { getPosts } from "../../../actions/posts";
import Title from "../../../../generic/typography/Title";
import Post from "./components/Post";
import List from "./components/List";

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
            key={index}
            image={post.originalImage}
            color={post.color}
            description={post.subtitle}
            lang={post.lang}
            title={post.title}
            platform={post.platform}
            date={post.date}
            to={post.path}
            priority={index === 0}
            tags={post.tags}
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
