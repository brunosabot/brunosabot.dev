import classes from "./ResultItem.module.css";

interface IResultItemProps {
  label: string;
  unit?: string;
  value: React.ReactNode;
}

export default function ResultItem({ label, unit, value }: IResultItemProps) {
  return (
    <div className={classes.Wrapper}>
      <span className={classes.Label}>{label}</span>
      <span className={classes.Value}>
        {value}
        {unit && <span className={classes.Unit}>{unit}</span>}
      </span>
    </div>
  );
}
