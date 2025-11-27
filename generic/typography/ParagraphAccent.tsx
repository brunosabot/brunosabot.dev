import classNames from "./ParagraphAccent.module.css";

interface IParagraphAccentProps {
  children: React.ReactNode;
}

export default function ParagraphAccent({ children }: IParagraphAccentProps) {
  return <p className={classNames.ParagraphAccent}>{children}</p>;
}
