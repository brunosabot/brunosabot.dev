interface Props {
  className?: string;
  d: string;
  pathAttributes?: Record<string, string>;
  onClick?: () => void;
}

const Svg: React.FC<Props> = ({ className, d, pathAttributes, onClick }) => {
  let height = 24;
  let width = 24;
  return (
    <svg
      onClick={onClick}
      className={className}
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path {...pathAttributes} d={d} />
    </svg>
  );
};

export default Svg;
