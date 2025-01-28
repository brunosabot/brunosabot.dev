import classNames from "./Hashtag.module.css";

interface IHashtagProps {
  children: React.ReactNode;
}

export default function Hashtag({ children }: IHashtagProps) {
  return (
    <span className={classNames.Hashtag}>
      <span className={classNames.Hash}>#</span>
      {children}
    </span>
  );
}
