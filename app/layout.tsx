import SeoWebsite from "../components/seo/Website";
import { SITE_METADATA } from "../lib/metadata";
import { season } from "../lib/season";
import "../styles/design.css";
import "../styles/globals.css";
import Script from "next/script";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export function generateViewport() {
  const currentSeason = season(new Date());

  let themeColor: string = "#5297ff";
  if (currentSeason === "spring") {
    themeColor = "#7db936";
  } else if (currentSeason === "summer") {
    themeColor = "#c2b280";
  } else if (currentSeason === "fall") {
    themeColor = "#e98604";
  }

  return {
    themeColor,
  };
}

export const metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  authors: [{ name: "Bruno Sabot", url: "https://brunosabot.dev" }],
  manifest: `${SITE_METADATA.siteUrl}/manifest.webmanifest`,
  alternates: {
    types: {
      "application/rss+xml": `${SITE_METADATA.siteUrl}/rss.xml`,
    },
  },
  other: {
    monetization: "$ilp.uphold.com/zbywBq9qy3pe",
  },
  icons: {
    apple: "/icons/maskable_icon.png",
  },
};

export default function RootLayout({ children }: IRootLayoutProps) {
  // TODO: lang
  const currentSeason = season(new Date());

  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={currentSeason}>
        {children}
        <div id="modal-root" aria-live="assertive"></div>{" "}
        <Script id="sw">
          {`
          if (typeof navigator.serviceWorker !== 'undefined') {
            navigator.serviceWorker.register('/service-worker.js')
          }
        `}
        </Script>
        <SeoWebsite />
      </body>
    </html>
  );
}
