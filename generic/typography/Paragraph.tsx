import classNames from "./Paragraph.module.css";

interface IParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: IParagraphProps) {
  return <p className={classNames.Paragraph}>{children}</p>;
}
