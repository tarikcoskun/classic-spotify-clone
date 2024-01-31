import icons from "./lib";

export type Icons = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: Icons;
  size?: number | string;
}

export default function Icon(props: IconProps) {
  const { icon, size = 16 } = props;

  const body = icons[icon];

  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={size.toString()} height={size.toString()} viewBox="0 0 24 24">
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        {body}
      </g>
    </svg>
  );
}
