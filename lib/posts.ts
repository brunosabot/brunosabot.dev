import { FullPost, Post } from "./notion";

export interface RelatedPost {
  path: string;
  title: string;
  subtitle: string;
  originalImage: string;
  date: string;
  lang: string;
  count: number;
}

export function getRelatedPosts(post: FullPost, posts: Post[]): RelatedPost[] {
  return posts
    .filter((p) => p.path !== post.data.path)
    .reduce<any[]>((acc, p) => {
      const commonTags = post.data.tags
        .split(",")
        .map((tag: string) => tag.trim())
        .filter((tag: any) =>
          p.tags
            .split(",")
            .map((s: string) => s.trim())
            .includes(tag)
        );

      return [...acc, { ...p, count: commonTags.length }];
    }, [])
    .sort((a, b) => b.count - a.count)
    .splice(0, 3);
}
