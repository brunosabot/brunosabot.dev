import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getMetaData } from "../../../lib/metadata";
import Form from "./Form";

export async function generateMetadata() {
  return getMetaData(
    {
      title: "Contact",
      description:
        "Have questions? Connect with Bruno Sabot! Discuss projects, collaborations, or just say hello.",
    },
    "/contact/",
  );
}

export default function ContactPage() {
  return (
    <>
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
