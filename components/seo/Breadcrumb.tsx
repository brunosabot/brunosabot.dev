import { SITE_METADATA } from "../../lib/metadata";

type BreadcrumbEntry = [string, string];
interface ISeoBreadcrumbProps {
  items: BreadcrumbEntry[];
}

function getLDJSON(items: BreadcrumbEntry[]) {
  const itemListElement = items.map(([name, item], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: `${SITE_METADATA.siteUrl}${item}`,
  }));

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  });
}

export default async function SeoBreadcrumb({ items }: ISeoBreadcrumbProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getLDJSON(items) }}
    />
  );
}
