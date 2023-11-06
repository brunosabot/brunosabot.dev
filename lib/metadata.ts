import type { Metadata } from "next";

export const SITE_METADATA = {
  title: "Bruno Sabot",
  description:
    "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
  twitterAuthor: "@brunosabot",
  twitterId: "39219387",
  siteUrl: "https://brunosabot.dev",
};

interface MetaDataInput {
  description?: string;
  title?: string;
  canonical?: string;
  url?: string;
  image?: string;
  lang?: string;
}

function getMetaDataOpenGraph(options: MetaDataInput) {
  const { description, title, url, image, lang } = options;
  const openGraph: Metadata["openGraph"] = {
    siteName: SITE_METADATA.title,
    type: "website",
  };

  if (title) openGraph.title = title;
  if (description) openGraph.description = description;
  if (url) openGraph.url = url;
  if (lang) openGraph.locale = lang;
  if (image) openGraph.images = [{ url: image }];

  return openGraph;
}

function getMetaDataTwitter(options: MetaDataInput) {
  const { description, title, image } = options;
  const twitter: Metadata["twitter"] = {
    card: "summary_large_image",
    creator: SITE_METADATA.twitterAuthor,
    siteId: SITE_METADATA.twitterId,
    creatorId: SITE_METADATA.twitterId,
  };

  if (title) twitter.title = title;
  if (description) twitter.description = description;
  if (image) twitter.images = [image];

  return twitter;
}

export function getMetaData(options: MetaDataInput) {
  const { description, title, canonical } = options;
  const metadata: Metadata = {
    metadataBase: new URL("https://brunosabot.dev"),
    openGraph: getMetaDataOpenGraph(options),
    twitter: getMetaDataTwitter(options),
  };

  if (description) metadata.description = description;
  if (title) metadata.title = title;
  if (canonical) metadata.alternates = { canonical };

  return metadata;
}
