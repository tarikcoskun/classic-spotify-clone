import type { ArtistUnion } from "@/types/Artist";

// Components
import Link from "next/link";
import Card from "@/ui/Card";

export default function ArtistRelated({ data }: { data: ArtistUnion }) {
  const relatedArtists = data.relatedContent.relatedArtists.items;

  return (
    <div className="genericContainer">
      <div className="genericGrid">
        {relatedArtists.map((artist, idx) => (
          <Link href="/artist" key={idx}>
            <Card cover={artist.visuals.avatarImage.sources[0].url} title={artist.profile.name} description="Artist" />
          </Link>
        ))}
      </div>
    </div>
  );
}
