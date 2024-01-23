import classes from "./BiographySkill.module.css";

interface IBiographySkillProps {
  children: React.ReactNode;
}

export default function BiographySkill({ children }: IBiographySkillProps) {
  return (
    <span className={classes.BiographySkill}>
      {children}
      &nbsp;
    </span>
  );
}
