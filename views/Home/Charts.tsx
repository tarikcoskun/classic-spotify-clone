// Components
import Link from "next/link";
import Card from "@/ui/Card";
import Section from "@/ui/Section";

// Data
import chartsData from "@/data/charts.json";

// Styles
import s from "./Charts.module.scss";

export default function HomeCharts() {
  return (
    <div className={s.tabView}>
      {chartsData.data.browse.sections.items.map((section, idx) => (
        <Section key={idx}>
          <Section.Header title={section.data.title.transformedLabel} />
          <div className="genericGrid">
            {section.sectionItems.items.map((item, idx) => (
              <Link href="/playlist" key={idx}>
                <Card
                  cover={item.content.data.images.items[0].sources[0].url}
                  title={item.content.data.name}
                  description={item.content.data.description}
                />
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
