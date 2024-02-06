import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBase64 from "./ToolBase64";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Effortlessly Convert Strings Between Text and Base64 Format",
      title: "Base 64 conversion tool",
    },
    "/tools/base-64/",
  );
}

export default function ToolBase64Page() {
  return (
    <>
      <PageTitle>Base 64 Tool</PageTitle>

      <ToolBase64 />

      <SimpleCard>
        <BlockTitle>
          Effortlessly Convert Strings Between Text and Base64 Format
        </BlockTitle>

        <p>
          Simplify your data encoding and decoding tasks with this versatile
          Base64 conversion tool. This user-friendly tool seamlessly converts
          strings between their original text format and the universally
          recognized Base64 encoding scheme. Whether you&apos;re working with
          plain text, binary data, or images, this tool effortlessly handles the
          transition, ensuring accurate and secure data representation.
        </p>

        <BlockParagraphTitle>
          Efficiently Encode and Decode Data in Base64 Format
        </BlockParagraphTitle>

        <p>
          This tool empowers you to seamlessly convert strings between their
          original text format and Base64 encoding. Whether you need to encode
          text for secure transmission or decode encoded data for further
          processing, this tool effortlessly handles the task.
        </p>

        <BlockParagraphTitle>
          Simplified Conversion for Efficient Data Management
        </BlockParagraphTitle>

        <p>
          This tool simplifies data conversion, saving you time and effort. With
          a simple user interface, you can quickly and accurately encode or
          decode strings, ensuring efficient data management and optimal
          workflow.
        </p>

        <BlockParagraphTitle>
          Unleash the Power of Base64 Encoding and Decoding
        </BlockParagraphTitle>

        <p>Utilize this comprehensive Base64 conversion tool to:</p>

        <ul>
          <li>Securely transmit data over networks</li>
          <li>Implement data integrity checks</li>
          <li>Store binary data in text files</li>
          <li>Integrate Base64 encoding into your applications</li>
        </ul>

        <BlockParagraphTitle>
          Transform Your Data Management with Seamless Base64 Conversion
        </BlockParagraphTitle>

        <p>
          Embrace the simplicity and efficiency of this Base64 conversion tool
          and streamline your data management processes. This tool empowers you
          to effortlessly encode and decode strings, ensuring accurate and
          secure data representation.
        </p>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>Effortless encoding and decoding of text strings</li>
          <li>Support for binary data and images</li>
          <li>Simple and intuitive user interface</li>
          <li>Free to use and accessible online</li>
        </ul>

        <BlockParagraphTitle>
          Embrace the power of Base64 conversion with this user-friendly tool
          and transform your data management experience!
        </BlockParagraphTitle>
      </SimpleCard>
    </>
  );
}
