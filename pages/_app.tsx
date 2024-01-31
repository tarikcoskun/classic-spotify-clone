import type { AppProps } from "next/app";

import Router from "next/router";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";

// Styles
import "pollen-css";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import PlayerProvider from "@/store/player";

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

      <DefaultSeo
        title="Spotify Clone"
        description="A clone of the classic Spotify UI made using Next.js"
        themeColor="#82bf00"
        openGraph={{
          images: [
            {
              url: "/demo.png",
              width: 1920,
              height: 1200,
            },
          ],
        }}
        twitter={{
          handle: "@tarikcoskunum",
          cardType: "summary_large_image",
        }}
      />

      <PlayerProvider>
        <Component {...pageProps} />
      </PlayerProvider>
    </>
  );
}
