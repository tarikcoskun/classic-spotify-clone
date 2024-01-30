// Components
import Section from "@/ui/Section";

// Data
import genresData from "@/data/genres.json";

// Styles
import s from "./Genres.module.scss";

export default function HomeGenres() {
  return (
    <div className={s.tabView}>
      <Section>
        <Section.Header title="Browse All" />
        <div className="genericGrid">
          {genresData.data.browseStart.sections.items[0].sectionItems.items.map((genre, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: genre.content.data.data.cardRepresentation.backgroundColor.hex }}
              className={s.genreCard}
            >
              <div className={s.title}>{genre.content.data.data.cardRepresentation.title.transformedLabel}</div>
              <img
                src={genre.content.data.data.cardRepresentation.artwork.sources[0].url}
                alt={genre.uri}
                width={160}
                height={160}
                draggable="false"
                className={s.artwork}
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
