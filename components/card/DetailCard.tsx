import Image from "next/image";
import classes from "./DetailCard.module.css";

interface Props {
  url: string;
  image: string;
  title: string;
  description: string[];
  priority?: boolean;
}

const DetailCard: React.FC<Props> = ({
  url,
  image,
  title,
  description,
  priority = false,
}) => (
  <a
    className={classes["detail-card"]}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className={classes["detail-card__image"]}>
      <Image
        src={image}
        alt={title}
        height={171}
        width={350}
        priority={priority}
      />
    </div>
    {description.map((d) => (
      <p key={d}>{d}</p>
    ))}
  </a>
);

export default DetailCard;
