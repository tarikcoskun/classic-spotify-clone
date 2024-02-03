import type { NewReleasesData } from "@/types/NewReleases";

// Components
import Link from "next/link";
import Card from "@/ui/Card";
import Section from "@/ui/Section";

// Data
import newReleasesData from "@/data/new-releases.json";

const newReleases = newReleasesData.data as NewReleasesData;

export default function HomeNewReleases() {
  return (
    <div className="genericContainer">
      {newReleases.browse.sections.items.map((section, idx) => (
        <Section key={section.data.title.transformedLabel}>
          <Section.Header title={section.data.title.transformedLabel} />
          <div className="genericGrid">
            {section.sectionItems.items.map((item, idx) => (
              <Link href={item.content.data.__typename === "Playlist" ? "/playlist" : "/album"} key={item.uri}>
                <Card
                  cover={
                    (item.content.data.images?.items[0].sources[0].url ||
                      item.content.data.coverArt?.sources[0].url) as string
                  }
                  title={item.content.data.name}
                  description={
                    (item.content.data.description ||
                      item.content.data.artists?.items.map((artist) => artist.profile.name).join(", ")) as string
                  }
                />
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
