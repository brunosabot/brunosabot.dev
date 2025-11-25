import classes from "./Filter.module.css";

interface IFilterProps {
  active: boolean;
  children: React.ReactNode;
  d: string;
  onClick: () => void;
}

export default function Filter({ active, children, d, onClick }: IFilterProps) {
  return (
    <button
      className={`${classes.Filter} ${active ? classes.Active : ""}`}
      onClick={onClick}
      type="button"
    >
      <svg viewBox="0 0 24 24">
        <path d={d} />
      </svg>
      {children}
    </button>
  );
}
