import { getNotionTags } from "../../../../lib/notion-posts";
import { getMetaData } from "../../../../lib/metadata";
import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import { getPostsByTag } from "../../../actions/posts";
import Post from "./components/Post";
import Title from "../../../../generic/typography/Title";
import List from "./components/List";

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

  const posts = await getPostsByTag(decodeURI(tag));

  return (
    <>
      <Title>Blog Posts About {decodeURI(tag)}</Title>

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
          ["Tags", "/tags/"],
          [`#${tag}`, `/tags/${tag}`],
        ]}
      />
    </>
  );
}
