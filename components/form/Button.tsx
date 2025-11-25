import classes from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  type: "button" | "reset" | "submit" | undefined;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  outline = false,
  type,
}) => {
  return (
    <button
      className={`${classes["Button"]} ${outline ? classes["Outline"] : ""}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
