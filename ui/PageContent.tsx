// Styles
import s from "./PageContent.module.scss";

export default function PageContent({ children }: React.PropsWithChildren) {
  return (
    <div className={s.scrollWrapper}>
      <main className={s.pageContent}>{children}</main>
    </div>
  );
}
