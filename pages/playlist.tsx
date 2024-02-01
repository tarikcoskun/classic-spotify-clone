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
          color={playlistInfo.images.items[0].extractedColors.colorRaw.hex}
          cover={playlistInfo.images.items[0].sources[0].url}
          type="PLAYLIST"
          title={playlistInfo.name}
          description={playlistInfo.description}
          ownerName={playlistInfo.ownerV2.data.name}
          trackCount={playlistInfo.content.totalCount}
        />

        <div className="contentSpacing">
          <Table
            spacing={["40px", "5fr", "4fr", "5fr", "2fr", "40px"]}
            data={playlistInfo.content.items.map((item, idx) => ({
              "#": {
                html:
                  context.isPlaying && context.track === item.itemV2.data.name ? (
                    <Icon icon="volume-high" className="whiteText" />
                  ) : (
                    idx + 1
                  ),
                whileHover:
                  context.isPlaying && context.track === item.itemV2.data.name ? (
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
                        context.setTrack(item.itemV2.data.name);
                      }}
                    >
                      <Icon icon="play-alt" size={20} />
                    </button>
                  ),
              },
              Track: {
                html: (
                  <span className="whiteText truncate" title={item.itemV2.data.name} data-active={context.track === item.itemV2.data.name}>
                    {item.itemV2.data.name}
                  </span>
                ),
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
                  <Link href="/album" className="whiteText hoverLine truncate" title={item.itemV2.data.albumOfTrack.name}>
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
