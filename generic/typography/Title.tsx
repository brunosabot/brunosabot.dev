import classNames from "./Title.module.css";

interface ITitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: ITitleProps) {
  return <h1 className={classNames.Title}>{children}</h1>;
}
