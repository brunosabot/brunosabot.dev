import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolCharsCount from "./ToolCharsCount";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/chars-count/",
      description:
        "Craft Compelling Content with Ease: The Ultimate Text Analysis Tool",
      title: "Character Count",
    },
    "/tools/chars-count/",
  );
}

export default function ToolCharsCountPage() {
  return (
    <>
      <PageTitle>Chars counter</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Character Count", "/tools/chars-count"],
        ]}
      />

      <ToolCharsCount />

      <SimpleCard>
        <BlockTitle>
          Character Count Tool: Instantly Analyze and Optimize Your Text
        </BlockTitle>

        <p>
          The Character Count Tool is your go-to resource for writers, students,
          marketers, and developers who need precise text analysis. Instantly
          count characters, words, and spaces—perfect for optimizing content for
          social media, academic assignments, SEO, or code. Get actionable
          insights and streamline your writing process, all in your browser with
          complete privacy.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant Character & Word Count:</strong> Get real-time
            statistics as you type or paste text.
          </li>
          <li>
            <strong>Whitespace & Non-Whitespace Breakdown:</strong> See exactly
            how your content is structured for better readability and
            optimization.
          </li>
          <li>
            <strong>Reading Time Estimation:</strong> Know how long it will take
            to read your text—ideal for content creators and educators.
          </li>
          <li>
            <strong>Developer-Friendly Interface:</strong> Clean, intuitive
            design for productivity and ease of use.
          </li>
          <li>
            <strong>Privacy First:</strong> All analysis happens locally in your
            browser—your text never leaves your device.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Ensuring your tweets, posts, or meta descriptions fit character
            limits.
          </li>
          <li>Analyzing essays, reports, or emails for length and clarity.</li>
          <li>
            Preparing code or documentation with precise length requirements.
          </li>
          <li>Teaching students about writing structure and word economy.</li>
        </ul>

        <p>
          Write smarter and faster—use the Character Count Tool to perfect your
          content and communicate with confidence.
        </p>
      </SimpleCard>
    </>
  );
}
