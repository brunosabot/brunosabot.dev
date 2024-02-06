import classes from "./BlockTitle.module.css";

interface Props {
  children: React.ReactNode;
}

const BlockTitle: React.FC<Props> = ({ children }) => (
  <h2 className={classes["block-title"]}>{children}</h2>
);

export default BlockTitle;
