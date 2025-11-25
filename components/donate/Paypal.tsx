import svgPaypal from "../svg/paypal";
import Svg from "../svg/Svg";
import classes from "./Paypal.module.css";

interface IPaypalProps {
  [key: string]: never;
}

const Paypal: React.FC<IPaypalProps> = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input name="business" type="hidden" value="33NU8P6VVDHUN" />
      <input name="no_recurring" type="hidden" value="0" />
      <input name="currency_code" type="hidden" value="EUR" />
      <button
        className={classes.Paypal}
        title="PayPal - The safer, easier way to pay online!"
      >
        <Svg d={svgPaypal} />
        Donate with PayPal
      </button>
    </form>
  );
};

export default Paypal;
