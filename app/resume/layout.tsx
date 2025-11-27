import LayoutClient from "../../components/LayoutClient";

interface IResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: IResumeLayoutProps) {
  return (
    <>
      {children}
      <LayoutClient />
    </>
  );
}
