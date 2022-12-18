import React from "react";
import classes from "./FilterButton.module.css";

interface IFilterButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  d: string;
}

const FilterButton: React.FC<IFilterButtonProps> = ({
  active,
  children,
  onClick,
  type = "button",
  d,
}) => {
  return (
    <button
      type={type}
      className={`${classes.FilterButton} ${active ? classes.Active : ""}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24">
        <path d={d} />
      </svg>
      {children}
    </button>
  );
};

export default FilterButton;
