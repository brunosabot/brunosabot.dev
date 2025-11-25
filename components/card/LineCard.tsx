import classes from "./LineCard.module.css";

interface Props {
  icon?: React.ReactNode;
  title: string;
  to?: string;
}

const LineCard: React.FC<Props> = ({ icon, title, to }) => {
  const Composant = to ? "a" : "div";

  return (
    <Composant
      className={classes["line-card"]}
      href={to}
      rel="noopener noreferrer"
      target={to && to.indexOf("http") === 0 ? "_blank" : undefined}
    >
      {icon}
      {title}
    </Composant>
  );
};

export default LineCard;
