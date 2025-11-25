import svgBuyMeACoffee from "../svg/buymeacoffee";
import Svg from "../svg/Svg";
import classes from "./BuyMeACoffee.module.css";

interface IBuyMeACoffeeProps {
  [key: string]: never;
}

const BuyMeACoffee: React.FC<IBuyMeACoffeeProps> = () => {
  return (
    <div>
      <a
        className={classes.BuyMeACoffee}
        href="https://www.buymeacoffee.com/brunosabot1"
        rel="noopener noreferrer"
        target="_blank"
        title="Buy me a coffee"
      >
        <Svg d={svgBuyMeACoffee} />
        Buy me a coffee
      </a>
    </div>
  );
};

export default BuyMeACoffee;
