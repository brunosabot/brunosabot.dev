import Svg from "../svg/Svg";
import svgPaypal from "../svg/paypal";
import classes from "./Paypal.module.css";

interface IPaypalProps {
  [key: string]: never;
}

const Paypal: React.FC<IPaypalProps> = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="business" value="33NU8P6VVDHUN" />
      <input type="hidden" name="no_recurring" value="0" />
      <input type="hidden" name="currency_code" value="EUR" />
      <button
        title="PayPal - The safer, easier way to pay online!"
        className={classes.Paypal}
      >
        <Svg d={svgPaypal} />
        Donate with PayPal
      </button>
    </form>
  );
};

export default Paypal;
