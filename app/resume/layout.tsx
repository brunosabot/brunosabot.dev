import LayoutClient from "../../components/LayoutClient";
import classes from "./index.module.css";

interface IResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: IResumeLayoutProps) {
  return (
    <main className={classes.Layout}>
      {children}
      <LayoutClient />
    </main>
  );
}
