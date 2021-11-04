import React from "react";
import classes from "./SvgButton.module.css";

interface ISvgButtonProps {
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  d: string;
}

const SvgButton: React.FC<ISvgButtonProps> = ({ onClick, type, d }) => {
  return (
    <button type={type} className={classes["SvgButton"]} onClick={onClick}>
      <svg viewBox="0 0 24 24">
        <path d={d} />
      </svg>
    </button>
  );
};

export default SvgButton;
