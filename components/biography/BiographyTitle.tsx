import classes from "./BiographyTitle.module.css";

interface IBiographyTitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function BiographyTitle({
  children,
  style,
}: IBiographyTitleProps) {
  return (
    <h1 className={classes.BiographyTitle} style={style}>
      {children}
    </h1>
  );
}
