import { NextResponse } from "next/server";
import { Post, getNotionPosts } from "../../../lib/notion";

export async function GET() {
  const posts = await getNotionPosts();

  return NextResponse.json<Post[]>(posts);
}
