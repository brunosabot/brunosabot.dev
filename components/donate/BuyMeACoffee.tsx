import Svg from "../svg/Svg";
import svgBuyMeACoffee from "../svg/buymeacoffee";
import classes from "./BuyMeACoffee.module.css";

interface IBuyMeACoffeeProps {
  [key: string]: never;
}

const BuyMeACoffee: React.FC<IBuyMeACoffeeProps> = () => {
  return (
    <div>
      <a
        href="https://www.buymeacoffee.com/brunosabot1"
        title="Buy me a coffee"
        className={classes.BuyMeACoffee}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg d={svgBuyMeACoffee} />
        Buy me a coffee
      </a>
    </div>
  );
};

export default BuyMeACoffee;
