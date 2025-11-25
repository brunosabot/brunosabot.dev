"use server";

import {
  getNotionPost,
  getNotionPosts,
  getNotionPostsByTag,
} from "../../lib/notion-posts";

export async function getPost(year: string, slug: string) {
  return getNotionPost(`/posts/${year}/${slug}/`);
}

export async function getPosts() {
  return getNotionPosts();
}

export async function getPostsByTag(tag: string) {
  return getNotionPostsByTag(tag);
}
