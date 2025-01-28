import Content from "./components/Content";

interface IToolsLayoutProps {
  children: React.ReactNode;
}

export default function ToolsLayout({ children }: IToolsLayoutProps) {
  return <Content>{children}</Content>;
}
