import Content from "./_components/Content";

interface IPostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: IPostLayoutProps) {
  return <Content>{children}</Content>;
}
