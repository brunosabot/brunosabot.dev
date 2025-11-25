import classes from "./Section.module.css";

interface ISectionProps {
  children: React.ReactNode;
  index: number;
}

export default async function Section({ children, index }: ISectionProps) {
  const className = [
    classes.Section,
    index % 2 === 0 ? classes.Even : classes.Odd,
  ];

  return (
    <section className={className.join(" ")}>
      <div className={classes.SectionContent}>{children}</div>
    </section>
  );
}
