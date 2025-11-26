"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import useKonami from "../lib/konami";

function LayoutClient() {
  useKonami();

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
export default LayoutClient;
