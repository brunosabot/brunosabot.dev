"use server";

import { getNotionStreamlineCards } from "../../lib/notion-streamline";

export async function getStreamlineCards() {
  return getNotionStreamlineCards();
}
