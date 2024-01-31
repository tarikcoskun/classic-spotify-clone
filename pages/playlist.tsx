import type { PlaylistV2 } from "@/types/Playlist";

import { getReadableTime } from "@/helpers/getReadableTime";
import { getReadableDate } from "@/helpers/getReadableDate";

// Components
import Layout from "@/ui/Layout";
import Link from "next/link";
import Table from "@/ui/Table";
import CollectionHeader from "@/ui/CollectionHeader";

// Data
import playlistData from "@/data/playlist.json";

const playlistInfo = playlistData.data.playlistV2 as PlaylistV2;

export default function Playlist() {
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
            spacing={["40px", "5fr", "4fr", "5fr", "3fr", "40px"]}
            data={playlistInfo.content.items.map((item, idx) => ({
              "#": idx + 1,
              Track: (
                <span className="whiteText truncate" title={item.itemV2.data.name}>
                  {item.itemV2.data.name}
                </span>
              ),
              Artist: (
                <Link
                  href="/artist"
                  className="whiteText hoverLine truncate"
                  title={item.itemV2.data.artists.items.map((artist) => artist.profile.name).join(", ")}
                >
                  {item.itemV2.data.artists.items.map((artist) => artist.profile.name).join(", ")}
                </Link>
              ),
              Album: (
                <Link href="/album" className="whiteText hoverLine truncate" title={item.itemV2.data.albumOfTrack.name}>
                  {item.itemV2.data.albumOfTrack.name}
                </Link>
              ),
              Added: getReadableDate(new Date(item.addedAt.isoString)),
              Duration: getReadableTime(item.itemV2.data.trackDuration.totalMilliseconds),
            }))}
          />
        </div>
      </main>
    </Layout>
  );
}
