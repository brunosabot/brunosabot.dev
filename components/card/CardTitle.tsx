import classes from "./Card.module.css";

interface Props {
  children: React.ReactNode;
}

const CardTitle: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes["card__header-title-wrapper"]}>
      <span className={classes["card__header-title"]}>{children}</span>
    </div>
  );
};

export default CardTitle;
