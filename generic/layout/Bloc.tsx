import classNames from "./Bloc.module.css";

interface IBlocProps {
  children: React.ReactNode;
}

export default function Bloc({ children }: IBlocProps) {
  return <section className={classNames.Bloc}>{children}</section>;
}
