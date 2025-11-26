import NavigationBack from "../../../../../components/header/NavigationBack";
import Content from "./_components/Content";

interface IToolsLayoutProps {
  children: React.ReactNode;
}

export default function ToolsLayout({ children }: IToolsLayoutProps) {
  return (
    <Content>
      <NavigationBack />
      {children}
    </Content>
  );
}
