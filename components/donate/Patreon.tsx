import Svg from "../svg/Svg";
import svgPatreon from "../svg/patreon";
import classes from "./Patreon.module.css";

interface IPatreonProps {
  [key: string]: never;
}

const Patreon: React.FC<IPatreonProps> = () => {
  return (
    <div>
      <a
        href="https://www.patreon.com/brunosabot?fan_landing=true"
        title="Become a patron"
        className={classes.Pateron}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg d={svgPatreon} />
        Become a patron
      </a>
    </div>
  );
};

export default Patreon;
