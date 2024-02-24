// Styles
import s from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{title}</h1>
    </header>
  );
}
