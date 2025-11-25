interface ISvgProps {
  className?: string;
  d: string;
  onClick?: () => void;
  pathAttributes?: Record<string, string>;
  size?: number;
}

export default function Svg({
  className,
  d,
  onClick,
  pathAttributes,
  size,
}: ISvgProps) {
  return (
    <svg
      className={className}
      height={size ?? 24}
      onClick={onClick}
      viewBox="0 0 24 24"
      width={size ?? 24}
    >
      <path {...pathAttributes} d={d} />
    </svg>
  );
}
