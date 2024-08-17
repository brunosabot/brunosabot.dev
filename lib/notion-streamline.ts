import { unstable_cache } from "next/cache";
import { getNotionClient, getTags } from "./notion";

function isDefined<T>(item: T | undefined): item is T {
  return item !== undefined;
}

async function readStreamline(id: string) {
  const notionClient = getNotionClient();
  const blockResponse = await notionClient.blocks.children.list({
    block_id: id,
    page_size: 100,
  });

  const result = blockResponse.results[0];

  if ("code" in result) {
    const language = result.code.language;
    const code = result.code.rich_text[0].plain_text;

    return { language, code };
  }

  return undefined;
}

async function mapNotionToStreamlineCard(notionPage: any) {
  const properties = notionPage.properties;
  const content = await readStreamline(notionPage.id);

  if (content === undefined) return undefined;

  return {
    id: notionPage.id,
    title: properties.Name.title[0].plain_text,
    status: properties.Status.status.name,
    tags: getTags(properties.Tags),
    code: content.code,
    language: content.language,
    author: properties.Author.rich_text[0]?.plain_text,
    image: properties.Image.files[0].file.url,
  };
}

async function fetchNotionStreamlineCards() {
  const notionClient = getNotionClient();

  const filters: any[] = [{ property: "Status", status: { equals: "Done" } }];

  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_STREAMLINE_DATABASE ?? "",
    filter: { and: filters },
    sorts: [{ property: "Name", direction: "ascending" }],
  });

  const promises = await Promise.all(
    response.results.map(mapNotionToStreamlineCard),
  );

  return promises.filter(isDefined);
}

export const getNotionStreamlineCards = unstable_cache(
  fetchNotionStreamlineCards,
  ["notion-streamline-cards"],
  {
    revalidate: 21600,
  },
);
