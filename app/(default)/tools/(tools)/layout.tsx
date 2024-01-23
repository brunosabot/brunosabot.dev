import NavigationBack from "../../../../components/header/NavigationBack";

interface IToolsLayoutProps {
  children: React.ReactNode;
}

export default function ToolsLayout({ children }: IToolsLayoutProps) {
  return (
    <>
      <NavigationBack />
      {children}
    </>
  );
}
