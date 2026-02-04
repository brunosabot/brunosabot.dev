import { ReactNode } from "react";

import NavigationBack from "../../../../../components/header/NavigationBack";
import ToolContent from "../../../../../generic/layout/ToolContent";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ToolContent>
      <NavigationBack />
      {children}
    </ToolContent>
  );
}
