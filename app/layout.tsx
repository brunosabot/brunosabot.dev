import "../styles/globals.css";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
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
        <meta name="monetization" content="$ilp.uphold.com/zbywBq9qy3pe" />
      </head>
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
