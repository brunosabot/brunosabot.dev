import { Client } from "@notionhq/client";

export interface FullPost {
  content: string;
  data: Post;
}
export type NotionCover = NotionCoverFile | NotionCoverUrl;

export interface NotionCoverFile {
  file: {
    expiry_time: string;
    url: string;
  };
  type: "file";
}

export interface NotionCoverUrl {
  external: {
    url: string;
  };
  type: "external";
}
export interface NotionDate {
  date: { start: string };
  id: string;
  type: "date";
}
export interface NotionMultiSelect {
  id: string;
  multi_select: { name: string }[];
  type: "multi_select";
}
export interface NotionPeople {
  id: string;
  people: { name: string }[];
  type: "people";
}
export interface NotionPost {
  Canonical: NotionUrl;
  Color: NotionRichText;
  Creator: NotionPeople;
  Date: NotionDate;
  Lang: NotionSelect;
  Name: NotionTitle;
  OriginalImageAlt: NotionRichText;
  Path: NotionRichText;
  Platform: NotionSelect;
  Status: NotionStatus;
  Subtitle: NotionRichText;
  Tags: NotionMultiSelect;
}
export interface NotionRichText {
  id: string;
  rich_text: { plain_text: string }[];
  type: "rich_text";
}
export interface NotionSelect {
  id: string;
  select: { name: string };
  type: "select";
}
export interface NotionStatus {
  id: string;
  status: { name: string };
  type: "status";
}

export interface NotionTitle {
  title: {
    plain_text: string;
  }[];
}

export interface NotionUrl {
  id: string;
  type: "url";
  url: null | string;
}
export interface Post {
  canonical: string;
  color: string;
  creator: string;
  date: string;
  id: string;
  lang: string;
  lastModified: string;
  originalImage?: string;
  originalImageAlt: string;
  path: string;
  platform: string;
  status: string;
  subtitle: string;
  tags: string;
  title: string;
}

export function getCover(cover: NotionCover) {
  if (cover.type === "external") return cover?.external.url;
  if (cover.type === "file") return cover?.file.url;

  return undefined;
}
export function getDateValue(property: NotionDate) {
  return new Date(property.date.start).toString();
}
export function getLang(property: NotionSelect) {
  return property.select.name === "🇺🇸" ? "en" : "fr";
}
export function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_SECRET,
  });
}
export function getRichTextValue(property: NotionRichText) {
  return property.rich_text.map((t) => t.plain_text).join("");
}

export function getTags(property: NotionMultiSelect) {
  return property.multi_select.map((tag) => tag.name);
}
