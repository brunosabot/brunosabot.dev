import { FullPost, Post } from "./notion";

export interface PostWithCount extends Post {
  count: number;
}

export function getRelatedPosts(
  post: FullPost,
  posts: Post[],
): PostWithCount[] {
  return posts
    .filter((p) => p.path !== post.data.path)
    .reduce<PostWithCount[]>((acc, p) => {
      const commonTags = post.data.tags
        .split(",")
        .map((tag: string) => tag.trim())
        .filter((tag: string) =>
          p.tags
            .split(",")
            .map((s: string) => s.trim())
            .includes(tag),
        );

      return [...acc, { ...p, count: commonTags.length }];
    }, [])
    .sort((a, b) => b.count - a.count)
    .splice(0, 4);
}
