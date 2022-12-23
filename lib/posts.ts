export interface RelatedPost {
  path: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  lang: string;
  count: number;
}

export function getRelatedPosts(post: any, posts: any[]): RelatedPost[] {
  return posts
    .filter((p) => p.data.path !== post.data.path)
    .reduce<any[]>((acc, p) => {
      const commonTags = post.data.tags
        .split(",")
        .map((tag: string) => tag.trim())
        .filter((tag: any) =>
          p.data.tags
            .split(",")
            .map((s: string) => s.trim())
            .includes(tag)
        );

      return [
        ...acc,
        {
          path: p.data.path,
          title: p.data.title,
          subtitle: p.data.subtitle,
          image: p.data.originalImage,
          date: p.data.date.toString(),
          lang: p.data.lang,
          count: commonTags.length,
        },
      ];
    }, [])
    .sort((a, b) => b.count - a.count)
    .splice(0, 3);
}
