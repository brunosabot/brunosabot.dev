import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

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

export function mapNotionToPost(
  notionPost: PageObjectResponse | PartialPageObjectResponse
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

export function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_SECRET,
  });
}

export async function readPostMarkdown(id: string) {
  const notionClient = getNotionClient();
  const n2m = new NotionToMarkdown({ notionClient: notionClient });

  const blockResponse = await notionClient.blocks.children.list({
    block_id: id,
    page_size: 100,
  });

  const mdBlocks = await n2m.blocksToMarkdown(blockResponse.results);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString;
}

export async function readPost(path: string) {
  const notionClient = getNotionClient();
  return await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE ?? "",
    filter: {
      or: [{ property: "Path", rich_text: { equals: path } }],
    },
  });
}

export async function getNotionPosts() {
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

export async function getNotionPost(path: string) {
  const response = await readPost(path);
  const data = mapNotionToPost(response.results[0]);
  const markdown = await readPostMarkdown(response.results[0].id);

  if (data === undefined) return undefined;

  const fullPost: FullPost = {
    content: markdown.parent,
    data,
  };

  return fullPost;
}
