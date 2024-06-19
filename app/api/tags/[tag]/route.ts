import { NextRequest, NextResponse } from "next/server";
import { Post, getNotionPostsByTag } from "../../../../lib/notion";

export const revalidate = 21600;

interface P {
  params: { tag: string };
}

export async function GET(request: NextRequest, { params }: P) {
  const posts = await getNotionPostsByTag(params.tag);

  return NextResponse.json<Post[]>(posts);
}
