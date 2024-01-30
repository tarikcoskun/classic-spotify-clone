import type { AppProps } from "next/app";

import Router from "next/router";
import NProgress from "nprogress";

// Styles
import "pollen-css";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

NProgress.configure({
  showSpinner: false,
  parent: "#innerBody",
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done(true));
Router.events.on("routeChangeError", () => NProgress.done(true));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>Spotify Clone</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
