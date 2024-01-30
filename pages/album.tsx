import type { AlbumUnion } from "@/types/Album";

import { getReadableTime } from "@/helpers/getTime";

// Components
import Layout from "@/ui/Layout";
import Link from "next/link";
import Table from "@/ui/Table";
import CollectionHeader from "@/ui/CollectionHeader";

// Data
import albumData from "@/data/album.json";

// Styles
import s from "@/styles/Collection.module.scss";

const albumInfo = albumData.data.albumUnion as AlbumUnion;

export default function Album() {
  return (
    <Layout>
      <main>
        <CollectionHeader
          color={albumInfo.coverArt.extractedColors.colorDark.hex}
          cover={albumInfo.coverArt.sources[0].url}
          type={albumInfo.type}
          title={albumInfo.name}
          ownerName={albumInfo.artists.items[0].profile.name}
          trackCount={albumInfo.discs.items[0].tracks.totalCount}
          date={albumInfo.date.isoString}
        />

        <div className="contentSpacing">
          <Table
            spacing={["40px", "4fr", "5fr", "40px"]}
            rowClassName={s.tableRow}
            data={albumInfo.tracks.items.map((item, idx) => ({
              "#": idx + 1,
              Track: (
                <span className="whiteText truncate" title={item.track.name}>
                  {item.track.name}
                </span>
              ),
              Artist: (
                <Link
                  href="/artist"
                  className="whiteText hoverLine truncate"
                  title={item.track.artists.items.map((artist) => artist.profile.name).join(", ")}
                >
                  {item.track.artists.items.map((artist) => artist.profile.name).join(", ")}
                </Link>
              ),
              Duration: getReadableTime(item.track.duration.totalMilliseconds),
            }))}
          />
        </div>
      </main>
    </Layout>
  );
}
