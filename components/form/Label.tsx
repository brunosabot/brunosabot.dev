import classes from "./Label.module.css";

interface Props {
  children: React.ReactNode;
  label: React.ReactNode;
}

const Label: React.FC<Props> = ({ children, label }) => {
  return (
    <label className={classes.Label}>
      <span className={classes.Text}>{label}</span>
      {children}
    </label>
  );
};

export default Label;
