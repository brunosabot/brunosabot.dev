import React from "react";
import Head from "next/head";

const SITE_METADATA = {
  title: "Bruno Sabot's website",
  description:
    "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
  author: "@brunosabot",
  siteUrl: "https://brunosabot.dev",
};

interface Meta {
  property: string;
  content: string;
}

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: React.FC<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const metaDescription = description || SITE_METADATA.description;

  return (
    <Head>
      <title>
        {title} | {SITE_METADATA.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:locale" content={lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={`website`} />
      <meta name="twitter:card" content={`summary`} />
      <meta name="twitter:creator" content={SITE_METADATA.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
};

export default SEO;
