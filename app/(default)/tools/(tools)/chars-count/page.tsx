import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolCharsCount from "./ToolCharsCount";

export async function generateMetadata() {
  return getMetaData({
    description: "Character and word count tool by Bruno Sabot",
    title: "Character count tool",
  });
}

export default function ToolCharsCountPage() {
  return (
    <>
      <PageTitle>Chars counter</PageTitle>

      <ToolCharsCount />

      <SimpleCard>
        The tool is a text analyzer that counts the number of words and
        characters in a sentence and provides an estimated reading time. It is
        designed to be a simple and efficient tool for analyzing text, making it
        ideal for writers, journalists, and students. With just one click, you
        can quickly get a word count and character count for your text.
        Additionally, the tool estimates the time it would take to read the text
        out loud, making it easy to gauge the length and complexity of your
        content. Whether you&apos;re writing an article, a short story, or just
        need to get a quick sense of the length of your text, this tool provides
        fast and accurate results. Whether you&apos;re a professional writer or
        a student, this tool is a useful tool to have in your toolkit.
      </SimpleCard>
    </>
  );
}
