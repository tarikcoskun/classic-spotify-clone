// Components
import Link from "next/link";
import Card from "@/ui/Card";
import Section from "@/ui/Section";

// Data
import chartsData from "@/data/charts.json";

export default function HomeCharts() {
  return (
    <div className="genericContainer">
      {chartsData.data.browse.sections.items.map((section, idx) => (
        <Section key={section.data.title.transformedLabel}>
          <Section.Header title={section.data.title.transformedLabel} />
          <div className="genericGrid">
            {section.sectionItems.items.map((item, idx) => (
              <Link key={item.content.data.name} href="/playlist">
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
