import matter from "gray-matter";
import fs from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const getPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source))
    .map((post) => {
      const year = `${new Date(post.data.date).getFullYear()}`;
      const slug = post.data.path.replace(`/posts/${year}/`, "");

      return { params: { year, slug } };
    });

  return { paths, fallback: false };
};
