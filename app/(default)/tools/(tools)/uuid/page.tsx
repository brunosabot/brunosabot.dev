import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolUuid from "./ToolUuid";

export async function generateMetadata() {
  return getMetaData({
    description: "UUID and Nano ID Generation tool by Bruno Sabot",
    title: "UUID tool",
  });
}

export default function ToolUuidPage() {
  return (
    <>
      <PageTitle>UUID Tool</PageTitle>

      <ToolUuid />

      <SimpleCard>
        The updated tool is a unique identifier generator that helps you quickly
        and easily generate ids based on five different formats: UUID V1, UUID
        V4, UUID V5, Nano ID, and ULID. UUID V1 uses the current time and the
        device&apos;s MAC address to generate a unique id, while UUID V4 uses
        random numbers. UUID V5 uses a secure hash function to generate a unique
        id based on a given namespace and name, and Nano ID uses a secure random
        number generator to generate a compact and URL-friendly id. ULID is a
        Universally Unique Lexicographically Sortable Identifier that uses the
        current time and random numbers to generate a 128-bit id that is both
        highly unique and easily sortable.
        <br />
        The tool provides a simple and intuitive interface for generating ids in
        each of these formats, allowing you to choose the best format for your
        needs. The ids are generated in real-time, making it easy to see the
        results and make any necessary adjustments. Whether you&apos;re a
        developer, data analyst, or simply need to generate unique ids, this
        tool is a must-have tool for your toolkit. With its flexible and
        easy-to-use interface, you can generate ids in any of the five formats
        with just a few clicks.
      </SimpleCard>
    </>
  );
}
