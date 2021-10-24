import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import konami from "../lib/konami";
import { pageview } from "../lib/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => konami());

  return <Component {...pageProps} />;
}
export default MyApp;
