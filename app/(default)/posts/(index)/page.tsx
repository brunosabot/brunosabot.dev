import { formatDistanceToNow } from "date-fns";
import Card from "../../../../components/card/Card";
import PageTitle from "../../../../components/typography/PageTitle";
import { Post } from "../../../../lib/notion";
import { getMetaData } from "../../../../lib/metadata";
import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";

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

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/`, {
    next: { revalidate: 3600 },
  });
  const posts = (await response.json()) as Post[];

  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageTitle>Post list</PageTitle>
      {posts.map((post, index) => (
        <Card
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
        />
      ))}

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Posts", "/posts/"],
        ]}
      />
    </>
  );
}
