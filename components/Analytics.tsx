import Script from "next/script";
import { useEffect } from "react";
import sendWebVitals from "../lib/performance";

function Analytics() {
  useEffect(() => sendWebVitals(), []);
  if (typeof window === "undefined") return null;
  if (window.location.hostname === "localhost") return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        id="url"
        src="https://www.googletagmanager.com/gtag/js?id=G-C3QX8BNP7P"
      />
      <Script
        id="inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C3QX8BNP7P');
          `,
        }}
      />
    </>
  );
}
export default Analytics;
