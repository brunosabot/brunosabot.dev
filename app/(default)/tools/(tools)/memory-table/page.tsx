import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolMemoryTable from "./ToolMemoryTable";

export async function generateMetadata() {
  return getMetaData({
    description: "Memory Table list and playing tool tool by Bruno Sabot",
    title: "Memory Table tool",
  });
}

export default function ToolMemoryTablePage() {
  return (
    <>
      <PageTitle>Memory Table Tool</PageTitle>

      <ToolMemoryTable />

      <SimpleCard>
        The tool is a memory association game that creates a table linking
        numbers with objects. The game allows you to play a guessing game based
        on the created table by matching a number with an object or vice versa.
        To play the game, you will be presented with either an object or a
        number, and your task will be to guess the corresponding match. The game
        tracks your progress and provides a score based on how many correct
        matches you make. This tool is a fun and interactive way to improve your
        memory retention, test your knowledge, or just have a little fun.
        Whether you&apos;re looking to challenge yourself, improve your memory
        skills, or simply have a good time, this tool is a great choice.
      </SimpleCard>
    </>
  );
}
