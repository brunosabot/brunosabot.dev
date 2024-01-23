import classes from "./BiographySubtitle.module.css";

interface IBiographySubtitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function BiographySubtitle({
  children,
  style,
}: IBiographySubtitleProps) {
  return (
    <h2 className={classes.BiographySubtitle} style={style}>
      {children}
    </h2>
  );
}
