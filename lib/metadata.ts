import type { Metadata } from "next";

export const SITE_METADATA = {
  description:
    "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
  siteUrl: "https://brunosabot.dev",
  title: "Bruno Sabot",
  twitterAuthor: "@brunosabot",
  twitterId: "39219387",
};

interface MetaDataInput {
  canonical?: string;
  description?: string;
  image?: string;
  lang?: string;
  title?: string;
  url?: string;
}

export function getMetaData(options: MetaDataInput, normalizedPage?: string) {
  const { canonical, description, title } = options;
  const metadata: Metadata = {
    metadataBase: new URL("https://brunosabot.dev"),
    openGraph: getMetaDataOpenGraph(options),
    twitter: getMetaDataTwitter(options),
  };

  if (description) metadata.description = description;
  if (title) metadata.title = title;
  if (normalizedPage) metadata.alternates = { canonical: normalizedPage };
  if (canonical) metadata.alternates = { canonical };

  return metadata;
}

function getMetaDataOpenGraph(options: MetaDataInput) {
  const { description, image, lang, title, url } = options;
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
  const { description, image, title } = options;
  const twitter: Metadata["twitter"] = {
    card: "summary_large_image",
    creator: SITE_METADATA.twitterAuthor,
    creatorId: SITE_METADATA.twitterId,
    siteId: SITE_METADATA.twitterId,
  };

  if (title) twitter.title = title;
  if (description) twitter.description = description;
  if (image) twitter.images = [image];

  return twitter;
}
