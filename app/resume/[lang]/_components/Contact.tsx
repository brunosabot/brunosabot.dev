import classes from "./Contact.module.css";

interface IContactProps {
  children: React.ReactNode;
}

export default function Contact({ children }: IContactProps) {
  return <section className={classes.Contact}>{children}</section>;
}
