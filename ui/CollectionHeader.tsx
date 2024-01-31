import { useState } from "react";

// Components
import Link from "next/link";
import Button from "./Button";

// Styles
import s from "@/styles/Collection.module.scss";

interface Props {
  color: string;
  cover: string;
  type: string;
  title: string;
  description?: string;
  trackCount: number;
  ownerName: string;
  date?: string;
}

export default function CollectionHeader(props: Props) {
  const { color, cover, type, title, description, trackCount, ownerName, date } = props;
  const [isFollowing, setFollowing] = useState(false);

  return (
    <header className={s.collectionHeader} style={{ backgroundImage: `linear-gradient(to bottom, ${color}, ${color}50)` }}>
      <img src={cover} alt={title} width={256} height={256} draggable="false" className={s.collectionCover} />
      <div className={s.collectionDetails}>
        <div className={s.collectionType}>{type}</div>
        <div className={s.title}>{title}</div>
        {description && <div className={s.description}>{description}</div>}
        <div className={s.lower}>
          <span className={s.ownerDetails}>
            By{" "}
            <Link href="/artist" className="whiteText hoverLine">
              {ownerName}
            </Link>
          </span>
          {date && (
            <>
              🞄
              <span>{new Date(date).getFullYear()}</span>
            </>
          )}
          🞄<span>{trackCount} songs</span>
        </div>
        <div className={s.actions}>
          <Button color="brand">PLAY</Button>
          <Button
            color="soft"
            onClick={() => {
              setFollowing((val) => !val);
            }}
          >
            {isFollowing ? "FOLLOWING" : "FOLLOW"}
          </Button>
        </div>
      </div>
    </header>
  );
}
