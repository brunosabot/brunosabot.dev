import { formatDistanceToNow } from "date-fns";
import Card from "../../../../components/card/Card";
import PageTitle from "../../../../components/typography/PageTitle";
import { getNotionTags } from "../../../../lib/notion";
import { getMetaData } from "../../../../lib/metadata";
import { RouteParams } from "./types";
import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import { getPostsByTag } from "../../../actions/posts";

export async function generateStaticParams() {
  const tags = await getNotionTags();

  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params: { tag } }: RouteParams) {
  return getMetaData(
    {
      description: `Interested with ${decodeURI(tag)}? Check out all the blog posts about this topic!`,
      title: `Blog Posts About ${decodeURI(tag)}`,
    },
    "/tags/",
  );
}

export default async function PostsPage({ params: { tag } }: RouteParams) {
  const posts = await getPostsByTag(tag);

  return (
    <>
      <PageTitle>Blog Posts About {decodeURI(tag)}</PageTitle>
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
          ["Tags", "/tags/"],
          [`#${tag}`, `/tags/${tag}`],
        ]}
      />
    </>
  );
}
