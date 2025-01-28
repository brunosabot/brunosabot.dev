import { formatDistanceToNow } from "date-fns";
import Card from "../../../../components/card/Card";
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
          <div key={index}>
            <Post
              image={post.originalImage}
              color={post.color}
              description={post.subtitle}
              lang={post.lang}
              title={post.title}
              platform={post.platform}
              date={formatDistanceToNow(new Date(post.date), {
                addSuffix: true,
              })}
              to={post.path}
              key={post.path + "-new"}
              priority={index === 0}
              tags={post.tags}
            />
            {/* <Card
            image={post.originalImage}
            color={post.color}
            description={post.subtitle}
            icon={post.lang}
            title={post.title}
            subtitle={post.platform}
            date={formatDistanceToNow(new Date(post.date), { addSuffix: true })}
            to={post.path}
            key={post.path}
            priority={index === 0}
            tags={post.tags}
          /> */}
          </div>
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
