import { useContext, useState } from "react";
import { useRouter } from "next/router";

// Components
import Link from "next/link";
import Icon, { type Icons } from "@/ui/Icon";

// Store
import { PlayerContext } from "@/store/player";

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
  const context = useContext(PlayerContext);

  return (
    <nav className={s.sidebar}>
      <div className={s.sidebarLinks}>
        {Object.entries(sidebarLinks).map(([category, links], idx) => (
          <div key={category} className={s.sidebarCategory}>
            <header className={s.categoryHeader}>
              <span className={s.categoryTitle}>{category}</span>
              {category === "PLAYLISTS" && (
                <button type="button" className={s.add} aria-label="Add to playlist">
                  <Icon icon="add" />
                </button>
              )}
            </header>

            <div className={s.categoryLinks}>
              {links.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={s.sidebarItem}
                  data-state={link.href === router.asPath ? "active" : "inactive"}
                >
                  <Icon className={s.itemIcon} icon={link.icon} size={24} />
                  <span className={s.itemLabel}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={s.nowPlaying} data-expanded={context.isExpanded}>
        <div
          className={s.albumCover}
          style={{ backgroundImage: `url(${context.playback.track.album.coverArt[0].url})` }}
        >
          <button
            type="button"
            className={s.expand}
            onClick={() => {
              context.setExpanded((val) => !val);
            }}
          >
            <Icon icon={context.isExpanded ? "chevron-down" : "chevron-up"} />
          </button>
        </div>
        <div className={s.flexGroup}>
          <div className={s.trackDetails}>
            <div className={s.title} title={context.playback.track.name}>
              {context.playback.track.name}
            </div>
            <div
              className={s.artist}
              title={context.playback.track.artists.map((artist) => artist.profile.name).join(", ")}
            >
              {context.playback.track.artists.map((artist) => artist.profile.name).join(", ")}
            </div>
          </div>
          <button type="button" className={s.add} aria-label="Add to playlist">
            <Icon icon="add" />
          </button>
        </div>
      </div>
    </nav>
  );
}
