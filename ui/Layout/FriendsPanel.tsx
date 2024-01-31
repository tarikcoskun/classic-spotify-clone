// Components
import Link from "next/link";
import Avatar from "../Avatar";
import Icon, { Icons } from "../Icon";

// Styles
import s from "@/styles/FriendsPanel.module.scss";

interface Activity {
  user: {
    username: string;
    active: boolean;
    lastActive?: string;
  };
  track: {
    name: string;
    artist: string;
  };
  source: {
    type: "playlist" | "album" | "artist";
    name: string;
  };
}

const activities: Activity[] = [
  {
    user: {
      username: "Emirhan",
      active: true,
    },
    track: {
      name: "Blackbird",
      artist: "Alter Bridge",
    },
    source: {
      type: "album",
      name: "Blackbird",
    },
  },
  {
    user: {
      username: "Ömer",
      active: true,
    },
    track: {
      name: "Yine Yazı Bekleriz",
      artist: "TNK",
    },
    source: {
      type: "album",
      name: "Söyle Ruhum",
    },
  },
  {
    user: {
      username: "Eda",
      active: true,
    },
    track: {
      name: "Ayrılık",
      artist: "Selda Bağcan",
    },
    source: {
      type: "album",
      name: "Anadolu Konserleri I-II",
    },
  },
  {
    user: {
      username: "Altan",
      active: true,
    },
    track: {
      name: "Killer Rap",
      artist: "Şam",
    },
    source: {
      type: "album",
      name: "P.O.P Mixtape pt.3",
    },
  },
  {
    user: {
      username: "Ahmet",
      active: true,
    },
    track: {
      name: "Borderline",
      artist: "Tame İmpala",
    },
    source: {
      type: "artist",
      name: "Tame Impala",
    },
  },
  {
    user: {
      username: "Hüseyin",
      active: true,
    },
    track: {
      name: "Yellow",
      artist: "Coldplay",
    },
    source: {
      type: "playlist",
      name: "voyager",
    },
  },
  {
    user: {
      username: "Arda",
      active: false,
      lastActive: "56m",
    },
    track: {
      name: "Tam Dört Yıl Olmuş Dün",
      artist: "emre aydın",
    },
    source: {
      type: "album",
      name: "Kağıt Evler",
    },
  },
  {
    user: {
      username: "Eren",
      active: false,
      lastActive: "4h",
    },
    track: {
      name: "My Love All Mine",
      artist: "Mitski",
    },
    source: {
      type: "album",
      name: "The Land Is Inhospitable and So Are We",
    },
  },
  {
    user: {
      username: "Özlem",
      active: false,
      lastActive: "7h",
    },
    track: {
      name: "Günü Gelir",
      artist: "Dedublüman",
    },
    source: {
      type: "artist",
      name: "Dedublüman",
    },
  },
  {
    user: {
      username: "Kardelen",
      active: false,
      lastActive: "19h",
    },
    track: {
      name: "imkansız bir aşk denir",
      artist: "yunus emre",
    },
    source: {
      type: "album",
      name: "imkansız bir aşk denir",
    },
  },
];

export default function FriendsPanel() {
  return (
    <div className={s.sidebar}>
      <div className={s.activities}>
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
                  activity.user.lastActive && <span className={s.lastActive}>{activity.user.lastActive}</span>
                )}
              </header>
              <div className={s.trackInfo}>
                <span>{activity.track.name}</span> 🞄 <Link href="/artist">{activity.track.artist}</Link>
              </div>
              <Link href={activity.source.type} className={s.sourceInfo}>
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
    </div>
  );
}
