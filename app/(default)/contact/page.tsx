import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../generic/typography/ParagraphSecondary";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import Form from "./Form";

export default function ContactPage() {
  return (
    <>
      <Title>Get in Touch</Title>

      <ParagraphSecondary>
        Have a question or want to work together? Drop me a message!
      </ParagraphSecondary>

      <Form />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Contact", "/contact/"],
        ]}
      />
    </>
  );
}

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Have questions? Connect with Bruno Sabot! Discuss projects, collaborations, or just say hello.",
      title: "Contact",
    },
    "/contact/",
  );
}
