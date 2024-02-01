// Components
import Icon from "./Icon";

// Styles
import s from "./Avatar.module.scss";

interface AvatarProps {
  size?: number | string;
  rounded?: boolean;
  padding?: number;
}

export default function Avatar({ size = 32, padding = 6, rounded = false }: AvatarProps) {
  return (
    <div
      className={s.avatar}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        padding: `${padding}px`,
        borderRadius: rounded ? "var(--radius-full)" : "var(--radius-sm)",
      }}
    >
      <Icon icon="user" size={size} />
    </div>
  );
}
