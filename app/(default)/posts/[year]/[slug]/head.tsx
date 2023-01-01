import Seo from "../../../../../components/Seo";
import { RouteParams } from "./types";
import { getNotionPost } from "../../../../../lib/notion";

export default async function PostHead({
  params: { year, slug },
}: RouteParams) {
  const post = await getNotionPost(`/posts/${year}/${slug}/`);

  if (post === undefined) {
    return null;
  }

  return (
    <>
      <Seo
        title={post.data.title}
        description={post.data.subtitle}
        image={post.data.originalImage}
        url={"https://brunosabot.dev/" + post.data.path}
        canonical={post.data.canonical}
      />
    </>
  );
}
