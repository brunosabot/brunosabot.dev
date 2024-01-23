import classes from "./Td.module.css";

interface ITdProps {
  children: React.ReactNode;
}

const Td: React.FC<ITdProps> = ({ children }) => {
  return <td className={classes.Td}>{children}</td>;
};

export default Td;
