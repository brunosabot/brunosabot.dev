import { SITE_METADATA } from "../../lib/metadata";
import SeoScript from "./Script";

type BreadcrumbEntry = [string, string];
interface ISeoBreadcrumbProps {
  items: BreadcrumbEntry[];
}

export default async function SeoBreadcrumb({ items }: ISeoBreadcrumbProps) {
  return <SeoScript data={getLDJSON(items)} />;
}

function getLDJSON(items: BreadcrumbEntry[]) {
  const itemListElement = items.map(([name, item], index) => ({
    "@type": "ListItem",
    item: `${SITE_METADATA.siteUrl}${item}`,
    name,
    position: index + 1,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
