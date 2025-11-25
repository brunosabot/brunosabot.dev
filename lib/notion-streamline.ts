import { unstable_cache } from "next/cache";

import { getNotionClient, getTags } from "./notion";

async function fetchNotionStreamlineCards() {
  const notionClient = getNotionClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: any[] = [{ property: "Status", status: { equals: "Done" } }];

  const response = await notionClient.dataSources.query({
    data_source_id: process.env.NOTION_STREAMLINE_DATABASE ?? "",
    filter: { and: filters },
    sorts: [{ direction: "ascending", property: "Name" }],
  });

  const promises = await Promise.all(
    response.results.map(mapNotionToStreamlineCard),
  );

  return promises.filter(isDefined);
}

function isDefined<T>(item: T | undefined): item is T {
  return item !== undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function mapNotionToStreamlineCard(notionPage: any) {
  const properties = notionPage.properties;
  const content = await readStreamline(notionPage.id);

  if (content === undefined) return undefined;

  return {
    author: properties.Author.rich_text[0]?.plain_text,
    code: content.code,
    description: properties.Description.rich_text[0]?.plain_text ?? "",
    id: notionPage.id,
    image: properties.Image.files[0]?.external?.url ?? undefined,
    language: content.language,
    status: properties.Status.status.name,
    tags: getTags(properties.Tags),
    title: properties.Name.title[0].plain_text,
  };
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

    return { code, language };
  }

  return undefined;
}

export const getNotionStreamlineCards = unstable_cache(
  fetchNotionStreamlineCards,
  ["notion-streamline-cards"],
  {
    revalidate: 21600,
  },
);
