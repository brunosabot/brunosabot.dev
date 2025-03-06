import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import { unstable_cache } from "next/cache";
import {
  FullPost,
  getCover,
  getDateValue,
  getLang,
  getNotionClient,
  getRichTextValue,
  getTags,
  NotionCover,
  NotionPost,
  Post,
} from "./notion";

const isPost = (item: Post | undefined): item is Post => {
  return item !== undefined;
};

function mapNotionToPost(
  notionPost:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse,
): Post | undefined {
  if (notionPost === undefined) return undefined;
  if (!("cover" in notionPost)) return undefined;

  const cover = notionPost.cover as unknown as NotionCover;
  const p = notionPost.properties as unknown as NotionPost;

  const data: Post = {
    id: notionPost.id,
    canonical: p.Canonical.url ?? "",
    color: getRichTextValue(p.Color),
    creator: p.Creator.people[0]?.name,
    date: getDateValue(p.Date),
    lang: getLang(p.Lang),
    originalImage: getCover(cover),
    originalImageAlt: getRichTextValue(p.OriginalImageAlt),
    path: getRichTextValue(p.Path),
    platform: p.Platform.select.name,
    status: p.Status.status.name,
    subtitle: getRichTextValue(p.Subtitle),
    tags: getTags(p.Tags).join(","),
    title: p.Name.title[0].plain_text,
    lastModified: notionPost.last_edited_time,
  };

  return data;
}

async function readPostMarkdown(id: string) {
  const notionClient = getNotionClient();
  const n2m = new NotionToMarkdown({ notionClient });

  let done = false;
  let startCursor = undefined;
  const blocks = [];

  while (done === false) {
    const { results, has_more, next_cursor } =
      await notionClient.blocks.children.list({
        block_id: id,
        page_size: 100,
        start_cursor: startCursor,
      });

    if (has_more === false) {
      done = true;
    } else {
      startCursor = next_cursor ?? undefined;
    }

    blocks.push(...results);
  }

  const mdBlocks = await n2m.blocksToMarkdown(blocks);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString;
}

// All posts

async function fetchNotionPosts(isFull: boolean) {
  const notionClient = getNotionClient();

  const filters: any[] = [{ property: "Date", date: { is_not_empty: true } }];
  if (isFull === false) {
    filters.push({ property: "Status", status: { equals: "Done" } });
  }

  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE ?? "",
    filter: { and: filters },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map(mapNotionToPost).filter(isPost);
}

const cachedFetchNotionPosts = unstable_cache(
  fetchNotionPosts,
  ["notion-posts"],
  {
    revalidate: 3600,
  },
);

export async function getNotionPosts(isFull: boolean = false) {
  return cachedFetchNotionPosts(isFull);
}

// Tags

export async function fetchNotionTags(): Promise<string[]> {
  const notionClient = getNotionClient();

  const response = await notionClient.databases.retrieve({
    database_id: process.env.NOTION_DATABASE ?? "",
  });

  // @ts-ignore Typing issue with notion client
  return response.properties.Tags.multi_select.options.map(({ name }) => name);
}
const cachedFetchNotionTags = unstable_cache(fetchNotionTags, ["notion-tags"], {
  revalidate: 3600,
});

export async function getNotionTags() {
  return cachedFetchNotionTags();
}

// Posts for a tag

async function fetchNotionPostsByTag(tag: string) {
  const posts = await getNotionPosts();

  return posts.filter((post) => post.tags.split(",").includes(tag));
}

const cachedFetchNotionPostsByTag = unstable_cache(
  fetchNotionPostsByTag,
  ["notion-posts-by-tag"],
  {
    revalidate: 3600,
  },
);

export async function getNotionPostsByTag(tag: string) {
  return cachedFetchNotionPostsByTag(tag);
}

// Specific post

async function fetchNotionPost(path: string) {
  const posts = await getNotionPosts(true);
  const postforPath = posts.filter((post) => post.path === path);
  const markdown = await readPostMarkdown(postforPath[0].id);

  if (postforPath[0] === undefined) return undefined;

  const fullPost: FullPost = {
    content: markdown.parent,
    data: postforPath[0],
  };

  return fullPost;
}

const cachedFetchNotionPost = unstable_cache(
  fetchNotionPost,
  ["notion-posts"],
  {
    revalidate: 3600,
  },
);

export async function getNotionPost(path: string) {
  return cachedFetchNotionPost(path);
}
