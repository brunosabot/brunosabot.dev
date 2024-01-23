import classes from "./Textarea.module.css";

interface ITextareaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  "aria-invalid"?: boolean;
  rows?: number;
  id?: string;
}

const Textarea: React.FC<ITextareaProps> = (props) => {
  return <textarea className={classes.Textarea} {...props} />;
};

export default Textarea;
