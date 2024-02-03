import icons from "./lib";

export type Icons = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: Icons;
  size?: number | string;
}

export default function Icon({ icon, size = 16, ...props }: IconProps) {
  const body = icons[icon];

  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      aria-label={icon}
    >
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        {body}
      </g>
    </svg>
  );
}
