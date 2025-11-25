import svgPatreon from "../svg/patreon";
import Svg from "../svg/Svg";
import classes from "./Patreon.module.css";

interface IPatreonProps {
  [key: string]: never;
}

const Patreon: React.FC<IPatreonProps> = () => {
  return (
    <div>
      <a
        className={classes.Pateron}
        href="https://www.patreon.com/brunosabot?fan_landing=true"
        rel="noopener noreferrer"
        target="_blank"
        title="Become a patron"
      >
        <Svg d={svgPatreon} />
        Become a patron
      </a>
    </div>
  );
};

export default Patreon;
