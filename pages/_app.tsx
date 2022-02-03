import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import konami from "../lib/konami";
import { useRouter } from "next/router";
import Analytics from "../components/Analytics";

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
