import { season } from "../lib/season";
import "../styles/globals.css";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  const currentSeason = season(new Date());

  let themeColor: string = "#5297ff";
  if (currentSeason === "spring") {
    themeColor = "#7db936";
  } else if (currentSeason === "summer") {
    themeColor = "#c2b280";
  } else if (currentSeason === "fall") {
    themeColor = "#e98604";
  }

  // TODO: lang

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for brunosabot.dev"
          href="/rss.xml"
        />
        <link
          rel="manifest"
          href="/manifest.webmanifest"
          crossOrigin="anonymous"
        />
        <link rel="apple-touch-icon" href="/icons/maskable_icon.png" />
        <meta name="theme-color" content={themeColor} />
        <meta name="monetization" content="$ilp.uphold.com/zbywBq9qy3pe" />
        <meta charSet="utf-8" />
      </head>
      <body className={currentSeason}>
        {children}
        <div id="modal-root" aria-live="assertive"></div>
      </body>
    </html>
  );
}
