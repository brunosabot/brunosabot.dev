import { SITE_METADATA } from "../../lib/metadata";
import SeoScript from "./Script";

interface ISeoBlogPostingProps {
  dateModified: Date;
  datePublished: Date;
  description: string;
  image: string;
  path: string;
  title: string;
}

export default async function SeoBlogPosting({
  dateModified,
  datePublished,
  description,
  image,
  path,
  title,
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
    author: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: `${SITE_METADATA.siteUrl}/`,
    },
    dateModified: (dateModified ?? datePublished).toISOString(),
    datePublished: datePublished.toISOString(),
    description: description,
    headline: title,
    image: image,
    mainEntityOfPage: {
      "@id": `${SITE_METADATA.siteUrl}${path}`,
      "@type": "WebPage",
    },
    publisher: {
      "@type": "Person",
      name: "Bruno Sabot",
      url: `${SITE_METADATA.siteUrl}/`,
    },
  };
}
