import classes from "./SvgButton.module.css";

interface ISvgButtonProps {
  d: string;
  onClick: () => void;
  type: "button" | "reset" | "submit" | undefined;
}

const SvgButton: React.FC<ISvgButtonProps> = ({ d, onClick, type }) => {
  return (
    <button className={classes["SvgButton"]} onClick={onClick} type={type}>
      <svg viewBox="0 0 24 24">
        <path d={d} />
      </svg>
    </button>
  );
};

export default SvgButton;
