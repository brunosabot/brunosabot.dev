import classes from "./CubicBezierSvg.module.css";

const getPointX = (width: number, x: number) => x * width;

// In this SVG y = 0 should be at the bottom,
// so every y point is substracted from the height
const getPointY = (height: number, y: number) => height - y * height;

const withOffset = (offset: number, value: number) => offset + value;

interface ICubicBezierProps {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

const CubicBezierSvg: React.FC<ICubicBezierProps> = ({ x1, x2, y1, y2 }) => {
  const x0 = 0;
  const y0 = 0;
  const x3 = 1;
  const y3 = 1;
  const width = 100;
  const height = 100;
  const offset = 2;

  const vwidth = width + offset * 2;
  const vheight = height + offset * 2;

  // Initial point
  const p0x = withOffset(offset, getPointX(width, x0));
  const p0y = withOffset(offset, getPointY(height, y0));

  // Start transition point
  const p1x = withOffset(offset, getPointX(width, x1));
  const p1y = withOffset(offset, getPointY(height, y1));

  // End transition point
  const p2x = withOffset(offset, getPointX(width, x2));
  const p2y = withOffset(offset, getPointY(height, y2));

  // Final point
  const p3x = withOffset(offset, getPointX(width, x3));
  const p3y = withOffset(offset, getPointY(height, y3));

  return (
    <svg
      className={classes.CubicBezierSvg}
      height={`${height}px`}
      viewBox={`0 0 ${vwidth} ${vheight}`}
      width={`${width}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M${p0x} ${p0y} C ${p1x} ${p1y}, ${p2x} ${p2y}, ${p3x} ${p3y}`}
        fill="none"
        stroke="var(--token-v2-color-accent)"
        strokeWidth="4"
      />
    </svg>
  );
};

export default CubicBezierSvg;
