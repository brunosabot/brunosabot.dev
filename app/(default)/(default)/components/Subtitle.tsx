import classNames from "./Subtitle.module.css";

interface ISubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: ISubtitleProps) {
  return (
    <h1 className={classNames.Subtitle}>
      <span className={classNames.Text}>{children}</span>
    </h1>
  );
}
