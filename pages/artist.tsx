import type { ArtistUnion } from "@/types/Artist";

import { useState } from "react";

// Components
import Layout from "@/ui/Layout";
import Tabs from "@/ui/Tabs";
import Button from "@/ui/Button";
import Icon from "@/ui/Icon";

// Views
import ArtistOverview from "@/views/Artist/Overview";
import ArtistRelated from "@/views/Artist/Related";
import ArtistBio from "@/views/Artist/Bio";

// Data
import artistData from "@/data/artist.json";

// Styles
import s from "@/styles/Artist.module.scss";

const artistInfo = artistData.data.artistUnion as ArtistUnion;

export default function Artist() {
  const [isFollowing, setFollowing] = useState(false);

  return (
    <Layout>
      <main>
        <header
          className={s.artistProfile}
          style={{ backgroundImage: `url(${artistInfo.visuals.headerImage.sources[0].url})` }}
        >
          <div className={s.artistDetails}>
            <div className={s.name}>{artistInfo.profile.name}</div>
            <div className={s.listeners}>
              {new Intl.NumberFormat("en-US").format(artistInfo.stats.monthlyListeners)} monthly listeners
            </div>
            <div className={s.actions}>
              <Button variant="solid" color="brand">
                <Icon icon="play" size={20} />
                PLAY
              </Button>
              <Button
                variant="outline"
                color={isFollowing ? "brand" : "surface"}
                onClick={() => {
                  setFollowing((val) => !val);
                }}
              >
                {isFollowing ? "FOLLOWING" : "FOLLOW"}
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="overview" style={{ marginTop: "-53px" }}>
          <Tabs.List
            className="contentSpacing"
            style={{ backgroundColor: "rgb(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          >
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="related">Related Artists</Tabs.Trigger>
            <Tabs.Trigger value="bio">Biography</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">
            <ArtistOverview data={artistInfo} />
          </Tabs.Content>
          <Tabs.Content value="related">
            <ArtistRelated data={artistInfo} />
          </Tabs.Content>
          <Tabs.Content value="bio">
            <ArtistBio data={artistInfo} />
          </Tabs.Content>
        </Tabs>
      </main>
    </Layout>
  );
}
