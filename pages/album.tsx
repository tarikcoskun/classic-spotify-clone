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

// Styles
import s from "@/styles/Collection.module.scss";

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
            spacing={["40px", "4fr", "5fr", "40px"]}
            rowClassName={s.tableRow}
            data={albumInfo.tracks.items.map((item, idx) => ({
              "#": {
                html: context.isPlaying && context.track === item.track.name ? <Icon icon="volume-high" className="whiteText" /> : idx + 1,
                whileHover:
                  context.isPlaying && context.track === item.track.name ? (
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
                        context.setTrack(item.track.name);
                      }}
                    >
                      <Icon icon="play-alt" size={20} />
                    </button>
                  ),
              },
              Track: {
                html: (
                  <span className="whiteText truncate" title={item.track.name} data-active={context.track === item.track.name}>
                    {item.track.name}
                  </span>
                ),
              },
              Artist: {
                html: (
                  <Link
                    href="/artist"
                    className="whiteText hoverLine truncate"
                    title={item.track.artists.items.map((artist) => artist.profile.name).join(", ")}
                  >
                    {item.track.artists.items.map((artist) => artist.profile.name).join(", ")}
                  </Link>
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
