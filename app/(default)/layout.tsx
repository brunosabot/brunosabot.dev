import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LayoutClient from "../../components/LayoutClient";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <LayoutClient />
    </>
  );
}
