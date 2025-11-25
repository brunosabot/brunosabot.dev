interface Props {
  className?: string;
  d: string;
  onClick?: () => void;
  pathAttributes?: Record<string, string>;
}

const Svg: React.FC<Props> = ({ className, d, onClick, pathAttributes }) => {
  const height = 24;
  const width = 24;
  return (
    <svg
      className={className}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      width={width}
    >
      <path {...pathAttributes} d={d} />
    </svg>
  );
};

export default Svg;
