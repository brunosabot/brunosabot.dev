import classes from "./ToolkitAbstract.module.css";

export default async function ToolkitAbstract() {
  return (
    <>
      <h3 className={classes.ToolkitAbstractTitle}>My Vibe</h3>
      <p className={classes.ToolkitAbstractContent}>
        Modern JavaScript mastery meets pragmatic engineering. Whether
        optimizing React/Next.js performance or scripting complex home
        automation, I focus on UX, robust testing, and seamless CI/CD to build
        reliable software that works beautifully in the real world.
      </p>
    </>
  );
}
