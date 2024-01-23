import CubicBezierSvg from "./CubicBezierSvg";

import styles from "./CubicBezierBlock.module.css";
import SimpleCard from "../card/SimpleCard";

interface ICubicBezierProps {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

const CubicBezierBlock: React.FC<ICubicBezierProps> = ({ x1, x2, y1, y2 }) => (
  <SimpleCard className={styles.CubicBezierBlock}>
    <CubicBezierSvg x1={x1} y1={y1} x2={x2} y2={y2} />
    <div className={styles.Legend}>
      cubic-bezier(
      {x1},&nbsp;
      {y1},&nbsp;
      {x2},&nbsp;
      {y2})
    </div>
    <div
      className={styles.Sample}
      style={{
        transitionTimingFunction: `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`,
      }}
    />
  </SimpleCard>
);

export default CubicBezierBlock;
