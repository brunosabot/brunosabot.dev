"use client";

import useKonami from "../lib/konami";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Script from "next/script";

function LayoutClient() {
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
      <SpeedInsights />
    </>
  );
}
export default LayoutClient;
