import type { ArtistUnion } from "@/types/Artist";

import { useContext, useState } from "react";
import { getReadableTime } from "@/helpers/getReadableTime";

// Components
import Link from "next/link";
import Card from "@/ui/Card";
import Icon from "@/ui/Icon";
import Table from "@/ui/Table";
import Button from "@/ui/Button";
import Section from "@/ui/Section";

// Store
import { PlayerContext } from "@/store/player";

// Styles
import s from "./Overview.module.scss";

export default function ArtistOverview({ data }: { data: ArtistUnion }) {
  const context = useContext(PlayerContext);
  const [popularExpanded, setPopularExpanded] = useState(false);

  const latestRelease = data.discography.popularReleasesAlbums.items.sort((a, b) => b.date.year - a.date.year)[0];
  const topTracks = data.discography.topTracks.items;
  const relatedArtists = data.relatedContent.relatedArtists.items.slice(0, 6);

  return (
    <div className="genericContainer">
      <div className={s.grid}>
        <div className={s.leftSide}>
          <Section>
            <Section.Header title="Latest Release" />
            <Link href="/album">
              <div className={s.latestRelease}>
                <img
                  src={latestRelease.coverArt.sources[0].url}
                  alt={latestRelease.name}
                  width={96}
                  height={96}
                  draggable="false"
                  className={s.albumCover}
                />
                <div className={s.albumDetails}>
                  <div className={s.title}>{latestRelease.name}</div>
                  <div className={s.releaseDate}>{latestRelease.date.year}</div>
                </div>
              </div>
            </Link>
          </Section>
          <Section>
            <Section.Header title="Popular" />
            <div className={s.popularContainer}>
              <Table
                headless
                spacing={["40px", "40px", "5fr", "2fr", "40px"]}
                data={(popularExpanded ? topTracks : topTracks.slice(0, 5)).map((item, idx) => ({
                  Cover: {
                    html: (
                      <img
                        src={item.track.albumOfTrack.coverArt.sources[0].url}
                        alt={item.track.name}
                        width={40}
                        height={40}
                        draggable="false"
                      />
                    ),
                  },
                  "#": {
                    html: (
                      <span data-active={context.playback.track.name === item.track.name} style={{ display: "flex" }}>
                        {context.isPlaying && context.playback.track.name === item.track.name ? <Icon icon="volume-high" /> : idx + 1}
                      </span>
                    ),
                    whileHover:
                      context.isPlaying && context.playback.track.name === item.track.name ? (
                        <button
                          aria-label="Pause"
                          className="whiteText"
                          onClick={() => {
                            context.setPlaying(false);
                          }}
                        >
                          <Icon icon="pause-alt" size={20} />
                        </button>
                      ) : (
                        <button
                          aria-label="Play"
                          className="whiteText"
                          onClick={() => {
                            context.setPlaying(true);
                            context.setPlayback({
                              elapsed: 0,
                              duration: item.track.duration.totalMilliseconds,
                              track: {
                                name: item.track.name,
                                artists: item.track.artists.items,
                                album: {
                                  name: item.track.name,
                                  coverArt: item.track.albumOfTrack.coverArt.sources,
                                },
                              },
                            });
                          }}
                        >
                          <Icon icon="play-alt" size={20} />
                        </button>
                      ),
                  },
                  Track: {
                    html: (
                      <span
                        className="whiteText truncate"
                        title={item.track.name}
                        data-active={context.playback.track.name === item.track.name}
                      >
                        {item.track.name}
                      </span>
                    ),
                    pass: {
                      duration: item.track.duration.totalMilliseconds,
                      track: {
                        name: item.track.name,
                        artists: item.track.artists.items,
                        album: {
                          name: item.track.name,
                          coverArt: item.track.albumOfTrack.coverArt.sources,
                        },
                      },
                    },
                  },
                  Playcount: new Intl.NumberFormat("en-US").format(parseInt(item.track.playcount)),
                  Duration: getReadableTime(item.track.duration.totalMilliseconds),
                }))}
              />
              <Button
                small
                variant="solid"
                color="surface"
                onClick={() => {
                  setPopularExpanded((val) => !val);
                }}
              >
                {popularExpanded ? "SHOW LESS" : "SHOW 5 MORE"}
              </Button>
            </div>
          </Section>
        </div>
        <Section>
          <Section.Header title="Related Artists" />
          <div className={s.relatedArtists}>
            {relatedArtists.map((artist, idx) => (
              <Link href="/artist" key={idx}>
                <div className={s.card}>
                  <img
                    src={artist.visuals.avatarImage.sources[0].url}
                    alt={artist.profile.name}
                    width={48}
                    height={48}
                    draggable="false"
                    className={s.artistPhoto}
                  />
                  <div className={s.name}>{artist.profile.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>
      <Section>
        <Section.Header title="Albums" />
        <div className="genericGrid">
          {data.discography.popularReleasesAlbums.items.map((album, idx) => (
            <Link href="/album" key={idx}>
              <Card
                cover={album.coverArt.sources[0].url}
                title={album.name}
                description={`${album.date.year} 🞄 ${album.type.replace("ALBUM", "Album").replace("SINGLE", "Single")}`}
              />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
