import classNames from "classnames";

// Styles
import s from "./Section.module.scss";

interface SectionProps extends React.HTMLAttributes<HTMLElement> { }

function SectionRoot({ className, children, ...props }: SectionProps) {
  return (
    <section {...props} className={classNames(s.section, className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

function SectionHeader({ className, title }: SectionHeaderProps) {
  return (
    <header className={classNames(s.header, className)}>
      <h2 className={s.title}>{title}</h2>
    </header>
  );
}

const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
});

export default Section;
