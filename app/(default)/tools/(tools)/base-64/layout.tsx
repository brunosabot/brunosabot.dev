import NavigationBack from "../../../../../components/header/NavigationBack";
import ToolContent from "../../../../../generic/layout/ToolContent";

interface IToolsLayoutProps {
  children: React.ReactNode;
}

export default function ToolsLayout({ children }: IToolsLayoutProps) {
  return (
    <ToolContent>
      <NavigationBack />
      {children}
    </ToolContent>
  );
}
