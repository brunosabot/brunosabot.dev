import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import Title from "../../../../generic/typography/Title";
import { getMetaData } from "../../../../lib/metadata";
import { getNotionTags } from "../../../../lib/notion-posts";
import { getPostsByTag } from "../../../actions/posts";
import List from "./components/List";
import Post from "./components/Post";

type Params = Promise<{ tag: string }>;

export const revalidate = 21600;

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

export async function generateStaticParams() {
  const tags = await getNotionTags();

  return tags.map((tag) => ({ tag }));
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
          ["Tags", "/tags/"],
          [`#${tag}`, `/tags/${tag}`],
        ]}
      />
    </>
  );
}
