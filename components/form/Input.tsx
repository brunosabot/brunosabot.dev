import classes from "./Input.module.css";

interface InputDefaultProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  "aria-invalid"?: boolean;
  className?: string;
  autoComplete?: string;
  id?: string;
  enterKeyHint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
}

type InputPropsCheckbox = InputDefaultProps & {
  type: "checkbox";
  checked: boolean;
};

type InputPropsText = InputDefaultProps & {
  value: string;
  autoFocus?: boolean;
};

type InputPropsNumber = InputDefaultProps & {
  value: string | number;
  autoFocus?: boolean;
  type: "number";
};

type InputPropsEmail = InputDefaultProps & {
  value: string;
  autoFocus?: boolean;
  type: "email";
};

type IInputProps =
  | InputPropsText
  | InputPropsCheckbox
  | InputPropsNumber
  | InputPropsEmail;

const Input: React.FC<IInputProps> = (props) => {
  const classNames = props.className
    ? `${props.className} ${classes.Input}`
    : classes.Input;

  if ("type" in props) {
    return <input {...props} type={props.type} className={classNames} />;
  }

  return <input {...props} className={classNames} />;
};

export default Input;
