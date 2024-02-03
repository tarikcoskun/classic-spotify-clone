// Components
import Navbar from "./Navbar";
import Player from "./Player";
import LeftSidebar from "./LeftSidebar";
import FriendsPanel from "./FriendsPanel";

// Styles
import s from "./Layout.module.scss";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={s.layout}>
      <Navbar />
      <div id="innerBody" className={s.pageLayout}>
        <LeftSidebar />
        <div className={s.pageContent}>{children}</div>
        <FriendsPanel />
      </div>
      <Player />
    </div>
  );
}
