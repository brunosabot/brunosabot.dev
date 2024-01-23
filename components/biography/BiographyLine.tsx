import classes from "./BiographyLine.module.css";

interface IBiographyLineProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function BiographyLine({
  children,
  style = {},
}: IBiographyLineProps) {
  return (
    <div className={classes.BiographyLine} style={style}>
      {children}
    </div>
  );
}
