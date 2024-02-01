// Styles
import s from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={s.header}>
      <div className={s.title}>{title}</div>
    </header>
  );
}
