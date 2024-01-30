// Components
import Icon from "@/ui/Icon";
import Avatar from "@/ui/Avatar";

// Styles
import s from "@/styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.controlsLeft}>
        <button
          aria-label="Back"
          onClick={() => {
            history.back();
          }}
        >
          <Icon icon="chevron-left" size={20} />
        </button>
        <button
          aria-label="Forward"
          onClick={() => {
            history.forward();
          }}
        >
          <Icon icon="chevron-right" size={20} />
        </button>
        <div className={s.search}>
          <Icon icon="search" size={20} />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className={s.controlsUser}>
        <Icon icon="notification-bell" size={24} />
        <div className={s.user}>
          <Avatar size={32} rounded />
          <span className={s.username}>Tarık Coşkun</span>
        </div>
      </div>
    </nav>
  );
}
