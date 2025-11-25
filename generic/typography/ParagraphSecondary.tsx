import classNames from "./ParagraphSecondary.module.css";

interface IParagraphSecondaryProps {
  children: React.ReactNode;
}

export default function ParagraphSecondary({
  children,
}: IParagraphSecondaryProps) {
  return <p className={classNames.ParagraphSecondary}>{children}</p>;
}
