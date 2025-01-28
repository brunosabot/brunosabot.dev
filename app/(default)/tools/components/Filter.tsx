import classes from "./Filter.module.css";

interface IFilterProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  d: string;
}

export default function Filter({ active, children, onClick, d }: IFilterProps) {
  return (
    <button
      type="button"
      className={`${classes.Filter} ${active ? classes.Active : ""}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24">
        <path d={d} />
      </svg>
      {children}
    </button>
  );
}
