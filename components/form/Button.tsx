import classes from "./Button.module.css";

interface IButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  outline?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  type,
  outline = false,
}) => {
  return (
    <button
      type={type}
      className={`${classes["Button"]} ${outline ? classes["Outline"] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
