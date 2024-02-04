import type { AlbumUnion } from "@/types/Album";

import { useContext } from "react";
import { getReadableTime } from "@/helpers/getReadableTime";

// Components
import Layout from "@/ui/Layout";
import Link from "next/link";
import Table from "@/ui/Table";
import Icon from "@/ui/Icon";
import CollectionHeader from "@/ui/CollectionHeader";

// Store
import { PlayerContext } from "@/store/player";

// Data
import albumData from "@/data/album.json";

const albumInfo = albumData.data.albumUnion as AlbumUnion;

export default function Album() {
  const context = useContext(PlayerContext);

  return (
    <Layout>
      <main>
        <CollectionHeader
          type={albumInfo.type}
          title={albumInfo.name}
          cover={albumInfo.coverArt.sources[0].url}
          ownerName={albumInfo.artists.items[0].profile.name}
          trackCount={albumInfo.discs.items[0].tracks.totalCount}
          date={albumInfo.date.isoString}
        />

        <div className="contentSpacing">
          <Table
            spacing={["32px", "16px", "4fr", "5fr", "40px"]}
            data={albumInfo.tracks.items.map((item, idx) => ({
              "#": {
                html: (
                  <span data-active={context.playback.track.name === item.track.name} style={{ display: "flex" }}>
                    {context.isPlaying && context.playback.track.name === item.track.name ? (
                      <Icon icon="volume-high" />
                    ) : (
                      idx + 1
                    )}
                  </span>
                ),
                whileHover:
                  context.isPlaying && context.playback.track.name === item.track.name ? (
                    <button
                      type="button"
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
                      type="button"
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
                              name: albumInfo.name,
                              coverArt: albumInfo.coverArt.sources,
                            },
                          },
                        });
                      }}
                    >
                      <Icon icon="play-alt" size={20} />
                    </button>
                  ),
              },
              "": {
                html: <Icon icon="add" />,
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
                      name: albumInfo.name,
                      coverArt: albumInfo.coverArt.sources,
                    },
                  },
                },
              },
              Artist: {
                html: (
                  <span
                    className="truncate"
                    title={item.track.artists.items.map((artist) => artist.profile.name).join(", ")}
                  >
                    {item.track.artists.items.map((artist, idx) => (
                      <>
                        <Link key={artist.uri} href="/artist" className="whiteText hoverLine">
                          {artist.profile.name}
                        </Link>
                        {idx !== item.track.artists.items.length - 1 && ", "}
                      </>
                    ))}
                  </span>
                ),
              },
              Duration: getReadableTime(item.track.duration.totalMilliseconds),
            }))}
          />
        </div>
      </main>
    </Layout>
  );
}
