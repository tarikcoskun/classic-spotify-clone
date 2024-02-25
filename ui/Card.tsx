import classNames from "classnames";

// Styles
import s from "./Card.module.scss";

export interface CardProps {
  cover: string;
  title: string;
  className?: string;
  description: string;
}

export default function Card({ cover, title, description, className, ...props }: CardProps) {
  return (
    <article {...props} className={classNames(s.card, className)}>
      <img src={cover} alt={title} draggable="false" className={s.cover} />
      <div className={s.cardBody}>
        <div className={s.title} title={title}>
          {title}
        </div>
        <div className={s.description}>{description}</div>
      </div>
    </article>
  );
}
