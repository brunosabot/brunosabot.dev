import React from "react";

export const SITE_METADATA = {
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
  image?: string;
  url?: string;
  canonical?: string;
}

const NewSeo: React.FC<Props> = ({
  description = "",
  lang = "en",
  image = undefined,
  title,
  url = undefined,
  canonical = undefined,
}) => {
  const metaDescription = description || SITE_METADATA.description;

  return (
    <>
      <title>{`${title} | ${SITE_METADATA.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:locale" content={lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:site_name" content="Bruno Sabot" />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:creator" content={SITE_METADATA.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content="@brunosabot" />
      {image ? <meta name="twitter:image" content={image} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </>
  );
};

export default NewSeo;
