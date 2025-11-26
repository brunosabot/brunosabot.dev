import classes from "./Block.module.css";

interface IBlockProps {
  color: string;
}

const Block: React.FC<IBlockProps> = ({ color }) => (
  <div
    className={`${classes.Block} ${classes.NoMargin}`}
    style={{ backgroundColor: color }}
  />
);

export default Block;
