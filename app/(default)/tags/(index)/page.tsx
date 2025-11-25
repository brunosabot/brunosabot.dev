import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import Hashtag from "../../../../generic/common/Hashtag";
import Title from "../../../../generic/typography/Title";
import { getNotionPosts } from "../../../../lib/notion-posts";
import List from "./components/List";

export default async function TagsPage() {
  const posts = await getNotionPosts();

  const tagsCount = posts
    .map((p) => p.tags.split(","))
    .flat()
    .reduce<Record<string, number>>(
      (acc, val) => ({ ...acc, [val]: (acc[val] ?? 0) + 1 }),
      {},
    );

  const maxCount = Object.entries(tagsCount).reduce(
    (acc, [, value]) => (acc > value ? acc : value),
    0,
  );

  const tags = Object.entries(tagsCount).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  return (
    <>
      <Title>Blog Tags</Title>

      <List>
        {tags.map(([tag, value]) => (
          <Hashtag
            href={`/tags/${tag}`}
            key={tag}
            style={{
              fontSize: `${1 + value / maxCount}rem`,
            }}
          >
            {tag + " "}
          </Hashtag>
        ))}
      </List>

      <p>
        Discover a wealth of informative articles on your favorite web
        development subjects! Here, you&apos;ll find all our blog posts topics,
        making it easy to find content that sparks your coding curiosity.
      </p>
      <p>
        Whether you&apos;re a JavaScript enthusiast, a React pro, or just
        looking for some non-dev content, we have something for you.
      </p>
      <p>Dive in and explore!</p>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tags", "/tags/"],
        ]}
      />
    </>
  );
}
