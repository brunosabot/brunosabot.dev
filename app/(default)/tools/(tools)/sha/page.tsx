import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolSha from "./ToolSha";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Fortify Your Data Security: Generate Secure Hashes with Our SHA Hash Calculator",
      title: "Sha Generation Tool",
      canonical: "https://brunosabot.dev/tools/sha/",
    },
    "/tools/sha/",
  );
}

export default function ToolShaPage() {
  return (
    <>
      <PageTitle>Sha Generation Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Sha Generation Tool", "/tools/sha"],
        ]}
      />

      <ToolSha />

      <SimpleCard>
        <BlockTitle>
          SHA Hash Generator: Instantly Secure and Verify Your Data
        </BlockTitle>

        <p>
          The SHA Hash Generation Tool empowers you to create secure,
          cryptographic hashes for any string or file. Instantly generate SHA-1,
          SHA-256, SHA-384, or SHA-512 hashes to protect sensitive information,
          verify data integrity, and support security best practices. Whether
          you’re a developer, IT professional, or security enthusiast, this tool
          delivers fast, reliable hashing—all within your browser for maximum
          privacy.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Multiple SHA Algorithms:</strong> Choose from SHA-1,
            SHA-224, SHA-256, SHA-384, and SHA-512 for flexible security
            options.
          </li>
          <li>
            <strong>Instant Hashing:</strong> Input your data and receive
            cryptographic hashes instantly—no waiting or page reloads.
          </li>
          <li>
            <strong>Copy & Export:</strong> Easily copy your hash values for use
            in code, documentation, or verification workflows.
          </li>
          <li>
            <strong>Developer-Friendly Interface:</strong> Simple, intuitive
            design for effortless hashing and quick adoption.
          </li>
          <li>
            <strong>Privacy First:</strong> All hashing is performed locally in
            your browser—your data never leaves your device.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>Password hashing and secure storage.</li>
          <li>Verifying file integrity and detecting tampering.</li>
          <li>Generating digital signatures and authentication tokens.</li>
          <li>Data verification for APIs, backups, and distributed systems.</li>
          <li>
            Educational purposes: teaching cryptography and security concepts.
          </li>
        </ul>

        <p>
          Strengthen your data security and streamline your workflow with the
          SHA Hash Generation Tool—your trusted solution for fast, private, and
          reliable cryptographic hashing.
        </p>
      </SimpleCard>
    </>
  );
}
