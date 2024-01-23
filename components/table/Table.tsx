import classes from "./Table.module.css";

interface ITableProps {
  children: React.ReactNode;
}

const Table: React.FC<ITableProps> = ({ children }) => {
  return <table className={classes.Table}>{children}</table>;
};

export default Table;
