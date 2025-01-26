import Content from "./components/Content";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return <Content>{children}</Content>;
}
