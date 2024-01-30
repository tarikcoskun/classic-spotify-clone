// Styles
import s from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <header className={s.header}>
      <h2>{title}</h2>
    </header>
  );
}
