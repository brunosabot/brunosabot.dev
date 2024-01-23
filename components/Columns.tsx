import classes from "./Columns.module.css";

interface IColumnsProps {
  children: React.ReactNode;
  cols: React.ReactNode;
}

const Columns: React.FC<IColumnsProps> = ({ cols, children }) => {
  return (
    <div
      className={`${classes.Columns} ${cols === 2 ? classes.Cols2 : ""} ${
        cols === 3 ? classes.Cols3 : ""
      } ${cols === 4 ? classes.Cols4 : ""}`}
    >
      {children}
    </div>
  );
};

export default Columns;
