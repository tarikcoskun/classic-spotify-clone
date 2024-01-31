// Components
import Link from "next/link";
import Icon from "@/ui/Icon";
import Section from "@/ui/Section";
import Card, { CardProps } from "@/ui/Card";

// Styles
import s from "./Overview.module.scss";

const greetingCards: CardProps[] = [
  {
    cover: "/playlist/Todays_Top_Hits.jpeg",
    title: "Today's Top Hits",
    description: "Måneskin is on top of the Hottest 50!",
  },
  {
    cover: "/playlist/New_Music_Friday_TR.jpeg",
    title: "New Music Friday TR",
    description: "Haftanın en iyi yeni çıkışları. Kapak: Selin",
  },
  {
    cover: "/playlist/Rock_Classics.jpeg",
    title: "Rock Classics",
    description: "Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses",
  },
  {
    cover: "/playlist/All_Out_90s.jpeg",
    title: "All Out 90s",
    description: "The biggest songs of the 1990s. Cover: Sheryl Crow.",
  },
  {
    cover: "/playlist/Legendary_Guitar_Solos.jpeg",
    title: "Legendary Guitar Solos",
    description: "Face-melters only. Cover: Eddie Van Halen",
  },
  {
    cover: "/playlist/This_Is_Fazıl_Say.jpeg",
    title: "This Is Fazıl Say",
    description: "This is Fazıl Say. The essential tracks, all in one playlist.",
  },
];

const genresCards: CardProps[] = [
  {
    cover: "/playlist/Peaceful_Piano.jpeg",
    title: "Peaceful Piano",
    description: "Peaceful piano to help you slow down, breathe, and relax.",
  },
  {
    cover: "/playlist/Chilled_Jazz.jpeg",
    title: "Chilled Jazz",
    description: "Mellow jazz to stay focused or unwind.",
  },
  {
    cover: "/playlist/Midnight_Blues.jpeg",
    title: "Midnight Blues",
    description: "Late night cool and the sound of smooth blues.",
  },
  {
    cover: "/playlist/Harekete_Geç.jpeg",
    title: "Harekete Geç",
    description: "Egzersizinin her anına tempo tutacak parçalar.",
  },
  {
    cover: "/playlist/Sad_Indie.jpeg",
    title: "Sad Indie",
    description: "The premier alternative melancholia playlist, featuring Joji",
  },
  {
    cover: "/playlist/my_life_is_a_movie.jpeg",
    title: "my life is a movie",
    description: 'every main character needs their soundtrack. Cover: Margaret in the "Tiny Moves" music video from Bleachers.',
  },
];

const topLists = [
  {
    cover: "/artist/Bad_Bunny.jpeg",
    artist: "Bad Bunny",
  },
  {
    cover: "/artist/Taylor_Swift.jpeg",
    artist: "Taylor Swift",
  },
  {
    cover: "/artist/The_Weeknd.jpeg",
    artist: "The Weeknd",
  },
];

const newReleases = [
  {
    cover: "/album/Bir_Günah_Gibi.jpeg",
    artist: "Batu Akdeniz",
  },
  {
    cover: "/album/Aşka_Çarem_Yok.jpeg",
    artist: "Nova Norda",
  },
  {
    cover: "/album/NE_SENLE_NE_SENSİZ.jpeg",
    artist: "Selin",
  },
];

export default function HomeOverview() {
  return (
    <div className={s.tabView}>
      <Section className={s.greeting}>
        <header className={s.header}>
          <div className={s.title}>The best music for any moment.</div>
          <div className={s.controls}>
            <button aria-label="Back" disabled>
              <Icon icon="chevron-left" size={16} />
            </button>
            <button aria-label="Forward">
              <Icon icon="chevron-right" size={16} />
            </button>
          </div>
        </header>
        <div className="genericGrid">
          {greetingCards.map((card, idx) => (
            <Link href="/playlist" key={idx}>
              <Card {...card} />
            </Link>
          ))}
        </div>
        <div className={s.gridTopNew}>
          <div className={s.card}>
            <header className={s.cardHeader}>
              <div className={s.title}>Top Lists</div>
              <div className={s.description}>{topLists.map((item) => item.artist).join(", ")}</div>
            </header>
            <div className={s.covers}>
              {topLists.map((item, idx) => (
                <img key={idx} src={item.cover} alt={item.artist} draggable="false" />
              ))}
            </div>
          </div>
          <div className={s.card}>
            <header className={s.cardHeader}>
              <div className={s.title}>New Releases</div>
              <div className={s.description}>{newReleases.map((item) => item.artist).join(", ")}</div>
            </header>
            <div className={s.covers}>
              {newReleases.map((item, idx) => (
                <img key={idx} src={item.cover} alt={item.artist} draggable="false" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className={s.genres}>
        <Section.Header title="Genres & Moods" />
        <div className="genericGrid">
          {genresCards.map((card, idx) => (
            <Link href="/playlist" key={idx}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
