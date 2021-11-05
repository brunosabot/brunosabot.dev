import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import LineCard from "../../components/card/LineCard";

export default function Base64() {
  return (
    <DefaultLayout type="short">
      <SEO
        description="Web and developer tools by Bruno Sabot"
        title="Web tools - Bruno Sabot"
      />
      <PageTitle>Tool list</PageTitle>
      <div style={{ paddingTop: "24px" }}>
        <LineCard to="/tools/base-64" title="Base 64 encode and decode" />
        <LineCard to="/tools/bezier-curves" title="Bezier curves" />
        <LineCard to="/tools/rgb-convertor" title="Color converter" />
        <LineCard to="/tools/pretty" title="JSON prettifier" />
        <LineCard to="/tools/sha" title="Sha generation" />
        <LineCard to="/tools/url-encode-decode" title="URL encode and decode" />
        <LineCard to="/tools/uuid" title="UUID and Nano ID generation" />
        <LineCard to="/tools/timestamp" title="Timestamp converter" />
      </div>
    </DefaultLayout>
  );
}
