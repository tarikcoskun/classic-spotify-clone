import type { PlaylistV2 } from "@/types/Playlist";

import { useContext } from "react";
import { getReadableTime } from "@/helpers/getReadableTime";
import { getReadableDate } from "@/helpers/getReadableDate";

// Components
import Layout from "@/ui/Layout";
import Link from "next/link";
import Icon from "@/ui/Icon";
import Table from "@/ui/Table";
import CollectionHeader from "@/ui/CollectionHeader";

// Store
import { PlayerContext } from "@/store/player";

// Data
import playlistData from "@/data/playlist.json";

const playlistInfo = playlistData.data.playlistV2 as PlaylistV2;

export default function Playlist() {
  const context = useContext(PlayerContext);

  return (
    <Layout>
      <main>
        <CollectionHeader
          type="PLAYLIST"
          title={playlistInfo.name}
          cover={playlistInfo.images.items[0].sources[0].url}
          description={playlistInfo.description}
          ownerName={playlistInfo.ownerV2.data.name}
          trackCount={playlistInfo.content.totalCount}
        />

        <div className="contentSpacing">
          <Table
            spacing={["40px", "5fr", "4fr", "5fr", "2fr", "40px"]}
            data={playlistInfo.content.items.map((item, idx) => ({
              "#": {
                html: (
                  <span data-active={context.playback.track.name === item.itemV2.data.name} style={{ display: "flex" }}>
                    {context.isPlaying && context.playback.track.name === item.itemV2.data.name ? (
                      <Icon icon="volume-high" />
                    ) : (
                      idx + 1
                    )}
                  </span>
                ),
                whileHover:
                  context.isPlaying && context.playback.track.name === item.itemV2.data.name ? (
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
                          duration: item.itemV2.data.trackDuration.totalMilliseconds,
                          track: {
                            name: item.itemV2.data.name,
                            artists: item.itemV2.data.artists.items,
                            album: {
                              name: item.itemV2.data.albumOfTrack.name,
                              coverArt: item.itemV2.data.albumOfTrack.coverArt.sources,
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
                    title={item.itemV2.data.name}
                    data-active={context.playback.track.name === item.itemV2.data.name}
                  >
                    {item.itemV2.data.name}
                  </span>
                ),
                pass: {
                  duration: item.itemV2.data.trackDuration.totalMilliseconds,
                  track: {
                    name: item.itemV2.data.name,
                    artists: item.itemV2.data.artists.items,
                    album: {
                      name: item.itemV2.data.albumOfTrack.name,
                      coverArt: item.itemV2.data.albumOfTrack.coverArt.sources,
                    },
                  },
                },
              },
              Artist: {
                html: (
                  <Link
                    href="/artist"
                    className="whiteText hoverLine truncate"
                    title={item.itemV2.data.artists.items.map((artist) => artist.profile.name).join(", ")}
                  >
                    {item.itemV2.data.artists.items.map((artist) => artist.profile.name).join(", ")}
                  </Link>
                ),
              },
              Album: {
                html: (
                  <Link
                    href="/album"
                    className="whiteText hoverLine truncate"
                    title={item.itemV2.data.albumOfTrack.name}
                  >
                    {item.itemV2.data.albumOfTrack.name}
                  </Link>
                ),
              },
              Added: getReadableDate(new Date(item.addedAt.isoString)),
              Duration: getReadableTime(item.itemV2.data.trackDuration.totalMilliseconds),
            }))}
          />
        </div>
      </main>
    </Layout>
  );
}
