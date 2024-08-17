import Image from "next/image";
import Flag from "../Flag";
import classes from "./Card.module.css";

interface Props {
  href?: string;
  tag: string;
}

const CardTag: React.FC<Props> = ({ href, tag }) => {
  if (href) {
    return (
      <a className={classes["card__tag"]} href={href}>
        {tag}
      </a>
    );
  }

  return <span className={classes["card__tag"]}>{tag}</span>;
};

export default CardTag;
