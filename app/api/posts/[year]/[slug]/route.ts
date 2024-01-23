import { NextRequest, NextResponse } from "next/server";
import { FullPost, getNotionPost } from "../../../../../lib/notion";

interface P {
  params: { year: string; slug: string };
}

export async function GET(request: NextRequest, { params }: P) {
  const post = await getNotionPost(`/posts/${params.year}/${params.slug}/`);

  if (post === undefined) {
    return NextResponse.json<{}>({}, { status: 404 });
  }

  return NextResponse.json<FullPost>(post);
}
