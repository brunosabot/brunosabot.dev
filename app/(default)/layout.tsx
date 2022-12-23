import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

interface Props {
  children: React.ReactNode;
}

const ResumeLayout: React.FC<Props> = ({ children, ...args }, ...args2) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ResumeLayout;
