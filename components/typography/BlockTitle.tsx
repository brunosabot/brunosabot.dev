import classes from "./BlockTitle.module.css";

interface Props {
  children: React.ReactNode;
}

const BlockTitle: React.FC<Props> = ({ children }) => (
  <h1 className={classes["block-title"]}>{children}</h1>
);

export default BlockTitle;
