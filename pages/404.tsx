// Components
import Header from "@/ui/Header";
import Layout from "@/ui/Layout";
import PageContent from "@/ui/PageContent";

export default function Home() {
  return (
    <Layout>
      <PageContent>
        <Header title="Page Not Found" />

        <div className="contentSpacing">
          <p>Available pages</p>
        </div>
      </PageContent>
    </Layout>
  );
}
