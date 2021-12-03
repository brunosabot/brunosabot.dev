export interface RelatedPost {
  path: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  lang: string;
  count: number;
}

export function getRelatedPosts(
  posts: any[],
  path: string,
  tags: string
): RelatedPost[] {
  return posts
    .filter((post) => post.data.path !== path)
    .reduce<any[]>((acc, p) => {
      const commonTags = tags
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
