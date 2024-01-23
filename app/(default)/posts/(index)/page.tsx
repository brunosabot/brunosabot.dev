import { formatDistanceToNow } from "date-fns";
import Card from "../../../../components/card/Card";
import PageTitle from "../../../../components/typography/PageTitle";
import { getNotionPosts } from "../../../../lib/notion";
import { getMetaData } from "../../../../lib/metadata";

export async function generateMetadata() {
  return getMetaData({
    description:
      "All posts publicated by Bruno Sabot on various plateforms. Check it out!",
    title: "Posts",
  });
}

export default async function PostsPage() {
  const posts = await getNotionPosts();

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
        />
      ))}
    </>
  );
}
