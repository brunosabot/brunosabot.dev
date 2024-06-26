import PageTitle from "../../../../components/typography/PageTitle";
import { getNotionTags } from "../../../../lib/notion";
import SeoBreadcrumb from "../../../../components/seo/Breadcrumb";
import classes from "./index.module.css";

export default async function PostsPage() {
  const tags = await getNotionTags();

  return (
    <>
      <PageTitle>Blog Tags</PageTitle>

      <div className={classes["tags"]}>
        {tags.map((tag) => (
          <a
            className={classes["tag"]}
            href={`/tags/${tag}`}
            key={tag}
            style={{
              fontSize: `${1 + Math.random()}em`,
            }}
          >
            {tag + " "}
          </a>
        ))}
      </div>

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
