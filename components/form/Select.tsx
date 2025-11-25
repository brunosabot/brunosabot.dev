import classes from "./Select.module.css";

interface ISelectProps {
  "aria-invalid"?: boolean;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Select: React.FC<ISelectProps> = (props) => {
  return <select className={classes.Select} {...props} />;
};

export default Select;
