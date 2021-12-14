import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import konami from "../lib/konami";
import { useRouter } from "next/router";
import Analytics from "../components/Analytics";

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  if (typeof gtag === "undefined") return;
  if (location.hostname === "localhost") return;

  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (location.hostname === "localhost") return;

      const ua = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "";
      window.gtag("config", ua, { page_path: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => konami());

  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
