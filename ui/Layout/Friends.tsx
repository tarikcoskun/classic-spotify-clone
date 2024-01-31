// Components
import Link from "next/link";
import Avatar from "../Avatar";
import Icon, { Icons } from "../Icon";

// Styles
import s from "@/styles/Friends.module.scss";

interface Activity {
  user: {
    username: string;
    active: boolean;
    lastActive?: number;
  };
  track: {
    name: string;
    artist: string;
  };
  source: {
    type: "playlist" | "album" | "artist";
    name: string;
    href: string;
  };
}

const activities: Activity[] = [
  {
    user: {
      username: "Emirhan",
      active: true,
    },
    track: {
      name: "Blue Jean Blues",
      artist: "The Jeff Healey Band",
    },
    source: {
      type: "artist",
      name: "The Jeff Healey Band",
      href: "/artist",
    },
  },
  {
    user: {
      username: "Ömer",
      active: true,
    },
    track: {
      name: "Söz Güzelim",
      artist: "Nilüfer",
    },
    source: {
      type: "album",
      name: "Büyük Aşkım",
      href: "/album",
    },
  },
  {
    user: {
      username: "Hüseyin",
      active: false,
      lastActive: 2520,
    },
    track: {
      name: "GET UP",
      artist: "Shinedown",
    },
    source: {
      type: "playlist",
      name: "Daily Mix 4",
      href: "/playlist",
    },
  },
  {
    user: {
      username: "Arda",
      active: false,
      lastActive: 3360,
    },
    track: {
      name: "Tam Dört Yıl Olmuş Dün",
      artist: "emre aydın",
    },
    source: {
      type: "album",
      name: "Kağıt Evler",
      href: "/album",
    },
  },
];

export default function FriendActivity() {
  return (
    <div className={s.sidebar}>
      {activities.map((activity, idx) => (
        <div key={idx} className={s.activity}>
          <Avatar size={48} padding={12} rounded />
          <div className={s.info}>
            <header className={s.userInfo}>
              <div className={s.username}>{activity.user.username}</div>{" "}
              {activity.user.active ? (
                <span className={s.active}>
                  <Icon icon="volume" />
                </span>
              ) : (
                activity.user.lastActive && <span className={s.lastActive}>{activity.user.lastActive / 60}m</span>
              )}
            </header>
            <div className={s.trackInfo}>
              <span>{activity.track.name}</span> 🞄 <Link href="/artist">{activity.track.artist}</Link>
            </div>
            <Link href={activity.source.href} className={s.sourceInfo}>
              <Icon
                icon={
                  activity.source.type
                    .replace("playlist", "musical-note")
                    .replace("album", "album-alt")
                    .replace("artist", "microphone") as Icons
                }
              />{" "}
              {activity.source.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
