import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Paragraph from "../../../generic/typography/Paragraph";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import Form from "./Form";

export default function ContactPage() {
  return (
    <>
      <Title>Contact me</Title>

      <Paragraph>
        Get in touch! Use the contact form below or connect with me on social
        media. I look forward to hearing from you.
      </Paragraph>

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
