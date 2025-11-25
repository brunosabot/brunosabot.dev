import classes from "./Textarea.module.css";

interface ITextareaProps {
  "aria-invalid"?: boolean;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  value: string;
}

const Textarea: React.FC<ITextareaProps> = (props) => {
  return <textarea className={classes.Textarea} {...props} />;
};

export default Textarea;
