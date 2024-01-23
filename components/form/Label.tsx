import classes from "./Label.module.css";

interface Props {
  label: React.ReactNode;
  children: React.ReactNode;
}

const Label: React.FC<Props> = ({ label, children }) => {
  return (
    <label className={classes.Label}>
      <span className={classes.Text}>{label}</span>
      {children}
    </label>
  );
};

export default Label;
