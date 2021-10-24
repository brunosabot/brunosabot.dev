import Document, { Html, Head, Main, NextScript } from "next/document";
import { season } from "../lib/season";

const currentSeason = season(new Date());
const seasonClass = currentSeason;

let themeColor: string = "#5297ff";
if (seasonClass === "spring") {
  themeColor = "#7db936";
} else if (seasonClass === "summer") {
  themeColor = "#c2b280";
} else if (seasonClass === "fall") {
  themeColor = "#e98604";
}

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    const lang =
      this.props.head?.find((tag) => tag?.props.property === "og:locale")?.props
        .content ?? "en";

    return (
      <Html lang={lang}>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-2395369-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-2395369-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
        </Head>
        <body className={seasonClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
