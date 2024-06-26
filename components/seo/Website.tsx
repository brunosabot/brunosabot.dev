import { SITE_METADATA } from "../../lib/metadata";
import SeoScript from "./Script";

interface ISeoWebsiteProps {
  [key: string]: never;
}

function getLDJSON() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `${SITE_METADATA.siteUrl}/`,
    name: SITE_METADATA.title,
    author: {
      "@type": "Person",
      givenName: "Bruno",
      familyName: "Sabot",
    },
  };
}

export default async function SeoWebsite({}: ISeoWebsiteProps) {
  return <SeoScript data={getLDJSON()} />;
}
