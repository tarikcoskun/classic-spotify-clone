import { useRouter } from "next/router";

// Components
import Link from "next/link";
import Icon, { type Icons } from "@/ui/Icon";

// Styles
import s from "@/styles/LeftSidebar.module.scss";

interface SidebarLink {
  label: string;
  icon: Icons;
  href: string;
}

const sidebarLinks: { [key: string]: SidebarLink[] } = {
  MAIN: [
    {
      label: "Browse",
      icon: "browse",
      href: "/",
    },
    {
      label: "Discover",
      icon: "discover",
      href: "/discover",
    },
    {
      label: "Radio",
      icon: "radio",
      href: "/radio",
    },
    {
      label: "Follow",
      icon: "follow",
      href: "/activity",
    },
    {
      label: "Top List",
      icon: "top-list",
      href: "/top-list",
    },
    {
      label: "Messages",
      icon: "inbox",
      href: "/inbox",
    },
    {
      label: "Play Queue",
      icon: "queue",
      href: "/queue",
    },
    {
      label: "Devices",
      icon: "devices",
      href: "/devices",
    },
  ],
  "YOUR MUSIC": [
    {
      label: "Songs",
      icon: "musical-note",
      href: "/you/songs",
    },
    {
      label: "Albums",
      icon: "album",
      href: "/you/albums",
    },
    {
      label: "Artists",
      icon: "microphone",
      href: "/you/artists",
    },
    {
      label: "Local Files",
      icon: "file-music",
      href: "/you/local",
    },
  ],
  PLAYLISTS: [
    {
      label: "Starred",
      icon: "star",
      href: "/playlist#a",
    },
    {
      label: "Workout",
      icon: "musical-note",
      href: "/playlist#b",
    },
    {
      label: "Road Tunes",
      icon: "musical-note",
      href: "/playlist#c",
    },
  ],
};

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <nav className={s.sidebar}>
      <div className={s.sidebarLinks}>
        {Object.entries(sidebarLinks).map(([category, links], idx) => (
          <div key={idx} className={s.sidebarCategory}>
            <header className={s.categoryHeader}>
              <span className={s.categoryTitle}>{category}</span>
              {category === "PLAYLISTS" && (
                <button className={s.add} aria-label="Add to playlist">
                  <Icon icon="add" />
                </button>
              )}
            </header>

            <div className={s.categoryLinks}>
              {links.map((link, idx) => (
                <Link key={idx} href={link.href} className={s.sidebarItem} data-state={link.href === router.asPath ? "active" : "inactive"}>
                  <Icon className={s.itemIcon} icon={link.icon} size={24} />
                  <span className={s.itemLabel}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div aria-label="Now playing" className={s.nowPlaying}>
        <img src="/album/Hot_Space.jpeg" alt="Hot Space" width={64} height={64} draggable="false" className={s.albumCover} />
        <div className={s.trackDetails}>
          <div className={s.title}>Under Pressure</div>
          <div className={s.artist}>Queen, David Bowie</div>
        </div>
        <button className={s.add} aria-label="Add to playlist">
          <Icon icon="add" />
        </button>
      </div>
    </nav>
  );
}
