import React from "react";

interface Props {
  className?: string;
  d: string;
  pathAttributes?: Record<string, string>;
}

const Svg: React.FC<Props> = ({ className, d, pathAttributes }) => {
  let height = 24;
  let width = 24;
  return (
    <svg
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
