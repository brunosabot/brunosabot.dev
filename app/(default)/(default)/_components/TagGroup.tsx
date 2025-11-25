import classes from "./TagGroup.module.css";

interface ITagGroupProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

export default async function TagGroup({ children, title }: ITagGroupProps) {
  return (
    <div>
      <h4 className={classes.TagGroupTitle}>{title}</h4>
      <div className={classes.TagGroupTags}>{children}</div>
    </div>
  );
}
