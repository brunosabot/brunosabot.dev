import React from "react";
import { getMetaData } from "../../../lib/metadata";
import Form from "./Form";

export async function generateMetadata() {
  return getMetaData({
    title: "Contact",
  });
}

export default function ContactPage() {
  return <Form />;
}
