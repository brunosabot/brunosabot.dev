"use client";

import { useEffect } from "react";
import useKonami from "../lib/konami";
// import { useRouter } from "next/router";
import Analytics from "../components/Analytics";
import Script from "next/script";

function LayoutClient() {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     if (location.hostname === "localhost") return;

  //     const ua = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "";
  //     window.gtag("config", ua, { page_path: url });
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  useKonami();

  return (
    <>
      {process.env.NODE_ENV !== "production" ? (
        <Script
          src="https://cdn.accesslint.com/a11y-logger-0.1.0.js"
          strategy="afterInteractive"
        />
      ) : null}
      <Analytics />
    </>
  );
}
export default LayoutClient;
