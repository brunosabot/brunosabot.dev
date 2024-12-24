import { formatDistanceToNow } from "date-fns";
import Card from "../../../../components/card/Card";
import PageTitle from "../../../../components/typography/PageTitle";
import { getNotionTags } from "../../../../lib/notion-posts";
import { getMetaData } from "../../../../lib/metadata";
import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import { getPostsByTag } from "../../../actions/posts";

type Params = Promise<{ tag: string }>;

export const revalidate = 21600;

export async function generateStaticParams() {
  const tags = await getNotionTags();

  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { tag } = await params;

  return getMetaData(
    {
      description: `Interested with ${decodeURI(tag)}? Check out all the blog posts about this topic!`,
      title: `Blog Posts About ${decodeURI(tag)}`,
    },
    "/tags/",
  );
}

export default async function PostsPage({ params }: { params: Params }) {
  const { tag } = await params;

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
