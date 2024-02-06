import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolUrlEncodeDecode from "./ToolUrlEncodeDecode";

export async function generateMetadata() {
  return getMetaData(
    {
      description: "URL encode and decode tool by Bruno Sabot",
      title: "URL tool",
    },
    "/tools/url-encode-decode/",
  );
}

export default function ToolUrlEncodeDecodePage() {
  return (
    <>
      <PageTitle>URL Tool</PageTitle>

      <ToolUrlEncodeDecode />

      <SimpleCard>
        The tool is a URL encoding and decoding tool that helps you quickly and
        easily convert between encoded URL strings and regular strings. It is
        designed to make it easy to switch between the two representations,
        allowing you to choose the best representation for your needs. The tool
        takes an encoded URL string or a regular string as input and generates
        the equivalent representation in the other format. The conversion is
        done in real-time, making it easy to see the results and make any
        necessary adjustments. Whether you&apos;re a developer, data analyst, or
        simply need to work with URL strings, this tool is a must-have tool for
        your toolkit. With its simple and intuitive interface, you can easily
        convert between encoded URL strings and regular strings with just a few
        clicks.
      </SimpleCard>
    </>
  );
}
