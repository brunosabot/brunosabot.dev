import classes from "./Select.module.css";

interface ISelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
  children: React.ReactNode;
}

const Select: React.FC<ISelectProps> = (props) => {
  return <select className={classes.Select} {...props} />;
};

export default Select;
