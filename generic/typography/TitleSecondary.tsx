import classNames from "./TitleSecondary.module.css";

interface ITitleSecondaryProps {
  children: React.ReactNode;
}

export default function TitleSecondary({ children }: ITitleSecondaryProps) {
  return <h2 className={classNames.TitleSecondary}>{children}</h2>;
}
