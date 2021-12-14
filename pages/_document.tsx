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
        </Head>
        <body className={seasonClass}>
          <Main />
          <NextScript />
          <div id="modal-root" aria-live="assertive"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
