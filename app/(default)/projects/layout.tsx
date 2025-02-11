import Content from "./components/Content";

interface IPostsLayoutProps {
  children: React.ReactNode;
}

export default function PostsLayout({ children }: IPostsLayoutProps) {
  return <Content>{children}</Content>;
}
