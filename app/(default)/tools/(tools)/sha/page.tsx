import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolSha from "./ToolSha";

export async function generateMetadata() {
  return getMetaData({
    description: "Sha Generation tool by Bruno Sabot",
    title: "Sha tool",
  });
}

export default function ToolShaPage() {
  return (
    <>
      <PageTitle>Sha Tool</PageTitle>

      <ToolSha />

      <SimpleCard>
        The tool is a SHA hash calculator that helps you calculate the SHA,
        SHA1, SHA224, SHA256, SHA384, and SHA512 values of a string. It is
        designed to help you generate secure and unique hashes of strings,
        making it ideal for security and cryptography applications. The tool
        takes a string as input and generates the corresponding SHA, SHA1,
        SHA224, SHA256, SHA384, and SHA512 hash values as output. The hashes
        generated by the tool are cryptographic hashes, meaning they are
        designed to be unique and secure. They can be used for a variety of
        purposes, including password storage, digital signatures, and data
        integrity checks. Whether you&apos;re a developer, security expert, or
        simply need to generate secure hashes for your data, this tool is a
        must-have tool for your toolkit. With its simple and intuitive
        interface, you can quickly and easily generate SHA, SHA1, SHA224,
        SHA256, SHA384, and SHA512 hash values for any string.
      </SimpleCard>
    </>
  );
}
