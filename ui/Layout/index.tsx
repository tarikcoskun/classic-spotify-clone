// Components
import Navbar from "./Navbar";
import Player from "./Player";
import LeftSidebar from "./LeftSidebar";
import FriendsPanel from "./FriendsPanel";

// Styles
import s from "./Layout.module.scss";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div id="innerBody" className={s.innerBody}>
        <LeftSidebar />
        {children}
        <FriendsPanel />
      </div>
      <Player />
    </>
  );
}
