import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { unstable_cache } from "next/cache";

export interface NotionCoverUrl {
  type: "external";
  external: {
    url: string;
  };
}
export interface NotionCoverFile {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
}

export type NotionCover = NotionCoverUrl | NotionCoverFile;

export interface NotionDate {
  type: "date";
  date: { start: string };
  id: string;
}
export interface NotionMultiSelect {
  type: "multi_select";
  multi_select: { name: string }[];
  id: string;
}
export interface NotionPeople {
  type: "people";
  people: { name: string }[];
  id: string;
}
export interface NotionRichText {
  type: "rich_text";
  rich_text: { plain_text: string }[];
  id: string;
}
export interface NotionSelect {
  type: "select";
  select: { name: string };
  id: string;
}
export interface NotionStatus {
  type: "status";
  status: { name: string };
  id: string;
}
export interface NotionUrl {
  type: "url";
  url: string | null;
  id: string;
}
export interface NotionTitle {
  title: {
    plain_text: string;
  }[];
}

export interface NotionPost {
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

export function getRichTextValue(property: NotionRichText) {
  return property.rich_text.map((t) => t.plain_text).join("");
}
export function getDateValue(property: NotionDate) {
  return new Date(property.date.start).toString();
}
export function getCover(cover: NotionCover) {
  if (cover.type === "external") return cover?.external.url;
  if (cover.type === "file") return cover?.file.url;

  return undefined;
}
export function getLang(property: NotionSelect) {
  return property.select.name === "🇺🇸" ? "en" : "fr";
}
export function getTags(property: NotionMultiSelect) {
  return property.multi_select.map((tag) => tag.name);
}

export function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_SECRET,
  });
}
