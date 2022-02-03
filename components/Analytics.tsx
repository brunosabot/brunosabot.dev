import Script from "next/script";
import { useEffect } from "react";
import sendWebVitals from "../lib/performance";

function Analytics() {
  useEffect(() => sendWebVitals(), []);
  if (typeof window === "undefined") return null;
  if (window.location.hostname === "localhost") return null;

  return (
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
  );
}
export default Analytics;
