import NewSeo from "../../../../../components/NewSeo";
import MatterPost from "../../../../../types/MatterPost";
import { RouteParams } from "./types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

function getPosts(): MatterPost[] {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source));
}

function getPost(posts: MatterPost[], year: string, slug: string) {
  return posts.find((p) => p.data.path === `/posts/${year}/${slug}`);
}

export default async function Head({ params: { year, slug } }: RouteParams) {
  const posts = getPosts();
  const post = getPost(posts, year, slug);

  if (post === undefined) {
    return null;
  }

  return (
    <>
      <NewSeo
        title={post.data.title}
        description={post.data.subtitle}
        image={post.data.image}
        url={"https://brunosabot.dev/" + post.data.path}
        canonical={post.data.canonical}
      />
    </>
  );
}
