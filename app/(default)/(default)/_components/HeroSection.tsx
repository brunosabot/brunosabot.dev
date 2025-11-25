import classes from "./HeroSection.module.css";

interface HeroSectionProps {
  children: React.ReactNode;
}

export default async function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className={classes.HeroSection}>
      <div className={classes.HeroSectionContent}>{children}</div>
    </section>
  );
}
