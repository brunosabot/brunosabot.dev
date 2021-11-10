import React from "react";

import classes from "./Block.module.css";

interface IBlockProps {
  color: string;
  noMargin?: boolean;
}

const Block: React.FC<IBlockProps> = ({ color, noMargin = false }) => (
  <div
    className={`${classes.Block} ${classes.NoMargin}`}
    style={{ backgroundColor: color }}
  />
);

export default Block;
