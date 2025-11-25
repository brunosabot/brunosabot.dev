import { SITE_METADATA } from "../../lib/metadata";
import SeoScript from "./Script";

interface ISeoWebsiteProps {
  [key: string]: never;
}

export default async function SeoWebsite({}: ISeoWebsiteProps) {
  return <SeoScript data={getLDJSON()} />;
}

function getLDJSON() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    author: {
      "@type": "Person",
      familyName: "Sabot",
      givenName: "Bruno",
    },
    name: SITE_METADATA.title,
    url: `${SITE_METADATA.siteUrl}/`,
  };
}
