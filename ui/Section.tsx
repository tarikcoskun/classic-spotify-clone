import classNames from "classnames";

// Styles
import s from "./Section.module.scss";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

function SectionRoot(props: SectionProps) {
  const { className, children } = props;

  return (
    <section {...props} className={classNames(s.section, className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

function SectionHeader(props: SectionHeaderProps) {
  const { className, title } = props;

  return (
    <header className={classNames(s.header, className)}>
      <div className={s.title}>{title}</div>
    </header>
  );
}

const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
});

export default Section;
