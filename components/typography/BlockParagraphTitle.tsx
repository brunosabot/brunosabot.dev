import classes from "./BlockParagraphTitle.module.css";

interface Props {
  children: React.ReactNode;
}

const BlockParagraphTitle: React.FC<Props> = ({ children }) => (
  <h3 className={classes.BlockParagraphTitle}>{children}</h3>
);

export default BlockParagraphTitle;
