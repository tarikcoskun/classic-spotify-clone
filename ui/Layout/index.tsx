// Components
import Navbar from "./Navbar";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Friends from "./Friends";

// Styles
import s from "@/styles/Layout.module.scss";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={s.layout}>
      <Navbar />
      <div id="innerBody" className={s.pageLayout}>
        <Sidebar />
        <div className={s.pageContent}>{children}</div>
        <Friends />
      </div>
      <Player />
    </div>
  );
}
