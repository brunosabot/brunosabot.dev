import { SITE_METADATA } from "../../lib/metadata";
import SeoScript from "./Script";

interface ISeoBlogPostingProps {
  path: string;
  title: string;
  description: string;
  image: string;
  datePublished: Date;
  dateModified: Date;
}

function getLDJSON(
  path: string,
  title: string,
  description: string,
  image: string,
  datePublished: Date,
  dateModified?: Date,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_METADATA.siteUrl}${path}`,
    },
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: `${SITE_METADATA.siteUrl}/`,
    },
    publisher: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: `${SITE_METADATA.siteUrl}/`,
    },
    datePublished: datePublished.toISOString(),
    dateModified: (dateModified ?? datePublished).toISOString(),
  };
}

export default async function SeoBlogPosting({
  path,
  title,
  description,
  image,
  datePublished,
  dateModified,
}: ISeoBlogPostingProps) {
  return (
    <SeoScript
      data={getLDJSON(
        path,
        title,
        description,
        image,
        datePublished,
        dateModified,
      )}
    />
  );
}
