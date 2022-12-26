import React from "react";
import PageTitle from "../../../components/typography/PageTitle";
import SimpleCard from "../../../components/card/SimpleCard";
import classes from "./index.module.css";

interface IContactLayoutProps {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: IContactLayoutProps) {
  return (
    <main className={classes.Content}>
      <PageTitle>Contact me</PageTitle>

      <SimpleCard>
        If you want to reach me, feel free to use the form below or any social
        media available in the page footer.
      </SimpleCard>

      {children}
    </main>
  );
}
