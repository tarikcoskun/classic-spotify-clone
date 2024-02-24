// Components
import Header from "@/ui/Header";
import Layout from "@/ui/Layout";
import PageContent from "@/ui/PageContent";
import Link from "next/link";

import s from "@/styles/pages/404.module.scss"

export default function Home() {
  const pages = [
    {
      href: "/",
      label: "Home"
    },
    {
      href: "/artist",
      label: "Artist"
    },
    {
      href: "/playlist",
      label: "Playlist"
    },
    {
      href: "/album",
      label: "Album"
    }
  ]

  return (
    <Layout>
      <PageContent>
        <Header title="Page Not Found" />

        <div className="contentSpacing">
          <p style={{ marginBlock: "var(--size-4)" }}>Available pages</p>
          <div className={s.pages}>{pages.map((link, idx) => (
            <>
              <Link key={idx} href={link.href}>{link.label}</Link>
              {idx !== pages.length - 1 && ", "}
            </>
          ))}</div>
        </div>
      </PageContent>
    </Layout>
  );
}
