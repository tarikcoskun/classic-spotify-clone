import { useState } from "react";

// Components
import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";

// Styles
import s from "./CollectionHeader.module.scss";

interface Props {
  type: string;
  title: string;
  cover: string;
  description?: string;
  trackCount: number;
  ownerName: string;
  date?: string;
}

export default function CollectionHeader({ type, title, cover, description, trackCount, ownerName, date }: Props) {
  const [isFollowing, setFollowing] = useState(false);

  return (
    <header className={s.collectionHeader}>
      <img src={cover} alt={title} width={256} height={256} draggable="false" className={s.collectionCover} />
      <div className={s.collectionDetails}>
        <div className={s.type}>{type}</div>
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
              🞄<span>{new Date(date).getFullYear()}</span>
            </>
          )}
          🞄<span>{trackCount} songs</span>
        </div>
        <div className={s.actions}>
          <Button variant="solid" color="brand">
            <Icon icon="play" size={20} />
            PLAY
          </Button>
          <Button
            variant="outline"
            color={isFollowing ? "brand" : "surface"}
            onClick={() => {
              setFollowing((val) => !val);
            }}
          >
            {type === "PLAYLIST" ? (isFollowing ? "FOLLOWING" : "FOLLOW") : isFollowing ? "SAVED" : "SAVE"}
          </Button>
        </div>
      </div>
    </header>
  );
}
