import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { unstable_cache } from "next/cache";

interface NotionCoverUrl {
  type: "external";
  external: {
    url: string;
  };
}
interface NotionCoverFile {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
}
type NotionCover = NotionCoverUrl | NotionCoverFile;

interface NotionDate {
  type: "date";
  date: { start: string };
  id: string;
}
interface NotionMultiSelect {
  type: "multi_select";
  multi_select: { name: string }[];
  id: string;
}
interface NotionPeople {
  type: "people";
  people: { name: string }[];
  id: string;
}
interface NotionRichText {
  type: "rich_text";
  rich_text: { plain_text: string }[];
  id: string;
}
interface NotionSelect {
  type: "select";
  select: { name: string };
  id: string;
}
interface NotionStatus {
  type: "status";
  status: { name: string };
  id: string;
}
interface NotionUrl {
  type: "url";
  url: string | null;
  id: string;
}
interface NotionTitle {
  title: {
    plain_text: string;
  }[];
}

interface NotionPost {
  Canonical: NotionUrl;
  Color: NotionRichText;
  Creator: NotionPeople;
  Date: NotionDate;
  Lang: NotionSelect;
  OriginalImageAlt: NotionRichText;
  Path: NotionRichText;
  Platform: NotionSelect;
  Status: NotionStatus;
  Subtitle: NotionRichText;
  Tags: NotionMultiSelect;
  Name: NotionTitle;
}

export interface Post {
  id: string;
  canonical: string;
  color: string;
  creator: string;
  date: string;
  lang: string;
  originalImage?: string;
  originalImageAlt: string;
  path: string;
  platform: string;
  status: string;
  subtitle: string;
  tags: string;
  title: string;
  lastModified: string;
}
export interface FullPost {
  content: string;
  data: Post;
}

const isPost = (item: Post | undefined): item is Post => {
  return item !== undefined;
};

function getRichTextValue(property: NotionRichText) {
  return property.rich_text.map((t) => t.plain_text).join("");
}
function getDateValue(property: NotionDate) {
  return new Date(property.date.start).toString();
}
function getCover(cover: NotionCover) {
  if (cover.type === "external") return cover?.external.url;
  if (cover.type === "file") return cover?.file.url;

  return undefined;
}
function getLang(property: NotionSelect) {
  return property.select.name === "🇺🇸" ? "en" : "fr";
}
function getTags(property: NotionMultiSelect) {
  return property.multi_select.map((tag) => tag.name).join(",");
}

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
    creator: p.Creator.people[0].name,
    date: getDateValue(p.Date),
    lang: getLang(p.Lang),
    originalImage: getCover(cover),
    originalImageAlt: getRichTextValue(p.OriginalImageAlt),
    path: getRichTextValue(p.Path),
    platform: p.Platform.select.name,
    status: p.Status.status.name,
    subtitle: getRichTextValue(p.Subtitle),
    tags: getTags(p.Tags),
    title: p.Name.title[0].plain_text,
    lastModified: notionPost.last_edited_time,
  };

  return data;
}

function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_SECRET,
  });
}

async function readPostMarkdown(id: string) {
  const notionClient = getNotionClient();
  const n2m = new NotionToMarkdown({ notionClient });

  const blockResponse = await notionClient.blocks.children.list({
    block_id: id,
    page_size: 100,
  });

  const mdBlocks = await n2m.blocksToMarkdown(blockResponse.results);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString;
}

// All posts

async function fetchNotionPosts() {
  const notionClient = getNotionClient();

  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE ?? "",
    filter: {
      or: [{ property: "Status", status: { equals: "Done" } }],
    },
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

export async function getNotionPosts() {
  return cachedFetchNotionPosts();
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
  const posts = await getNotionPosts();
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
