interface ISvgProps {
  className?: string;
  d: string;
  pathAttributes?: Record<string, string>;
  onClick?: () => void;
  size?: number;
}

export default function Svg({
  className,
  d,
  pathAttributes,
  onClick,
  size,
}: ISvgProps) {
  return (
    <svg
      onClick={onClick}
      className={className}
      height={size ?? 24}
      width={size ?? 24}
      viewBox="0 0 24 24"
    >
      <path {...pathAttributes} d={d} />
    </svg>
  );
}
