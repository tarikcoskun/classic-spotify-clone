import classNames from "classnames";
import type { ArtistUnion } from "@/types/Artist";

// Components
import Icon, { type Icons } from "@/ui/Icon";

// Styles
import s from "./Bio.module.scss";
import Section from "@/ui/Section";

export default function ArtistBio({ data }: { data: ArtistUnion }) {
  return (
    <div className="genericContainer">
      <div className={s.grid}>
        <div className={s.leftSide}>
          <Section>
            <Section.Header title={`About ${data.profile.name}`} />
            <div className={s.bio}>{data.profile.biography.text}</div>
          </Section>
        </div>
        <div className={s.rightSide}>
          <div className={s.stats}>
            <div className={s.stat}>
              <div className={classNames(s.title, s.big)}>
                {new Intl.NumberFormat("en-US").format(data.stats.followers)}
              </div>
              <div className={s.description}>Followers</div>
            </div>
            <div className={s.stat}>
              <div className={classNames(s.title, s.big)}>
                {new Intl.NumberFormat("en-US").format(data.stats.monthlyListeners)}
              </div>
              <div className={s.description}>Monthly Listeners</div>
            </div>
          </div>
          <div className={s.topCities}>
            {data.stats.topCities.items.map((stat, idx) => (
              <div key={stat.city} className={s.stat}>
                <div className={s.title}>
                  {stat.city}, {stat.country}
                </div>
                <div className={s.description}>
                  {new Intl.NumberFormat("en-US").format(stat.numberOfListeners)} listeners
                </div>
              </div>
            ))}
          </div>
          <div className={s.links}>
            {data.profile.externalLinks.items.map((link, idx) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <div className={s.socialLink}>
                  <Icon icon={link.name.toLowerCase() as Icons} size={24} />
                  <span>{link.name.toLowerCase()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
