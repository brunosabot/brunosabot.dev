import classNames from "./Subtitle.module.css";

interface ISubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: ISubtitleProps) {
  return <h3 className={classNames.Subtitle}>{children}</h3>;
}
