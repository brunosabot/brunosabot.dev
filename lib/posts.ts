import { FullPost, Post } from "./notion";

export interface RelatedPost {
  count: number;
  date: string;
  lang: string;
  originalImage: string;
  path: string;
  subtitle: string;
  tags: string;
  title: string;
}

export function getRelatedPosts(post: FullPost, posts: Post[]): RelatedPost[] {
  return (
    posts
      .filter((p) => p.path !== post.data.path)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .reduce<any[]>((acc, p) => {
        const commonTags = post.data.tags
          .split(",")
          .map((tag: string) => tag.trim())
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((tag: any) =>
            p.tags
              .split(",")
              .map((s: string) => s.trim())
              .includes(tag),
          );

        return [...acc, { ...p, count: commonTags.length }];
      }, [])
      .sort((a, b) => b.count - a.count)
      .splice(0, 3)
  );
}
