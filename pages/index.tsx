// Components
import Layout from "@/ui/Layout";
import Header from "@/ui/Header";
import Tabs from "@/ui/Tabs";

// Views
import HomeOverview from "@/views/Home/Overview";
import HomeCharts from "@/views/Home/Charts";
import HomeGenres from "@/views/Home/Genres";
import HomeNewReleases from "@/views/Home/NewReleases";

export default function Home() {
  return (
    <Layout>
      <main>
        <Header title="Browse" />

        <Tabs defaultValue="overview">
          <Tabs.List className="contentSpacing">
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="charts">Charts</Tabs.Trigger>
            <Tabs.Trigger value="genres">Genres & Moods</Tabs.Trigger>
            <Tabs.Trigger value="newReleases">New Releases</Tabs.Trigger>
            <Tabs.Trigger value="news">News</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">
            <HomeOverview />
          </Tabs.Content>
          <Tabs.Content value="charts">
            <HomeCharts />
          </Tabs.Content>
          <Tabs.Content value="genres">
            <HomeGenres />
          </Tabs.Content>
          <Tabs.Content value="newReleases">
            <HomeNewReleases />
          </Tabs.Content>
        </Tabs>
      </main>
    </Layout>
  );
}
