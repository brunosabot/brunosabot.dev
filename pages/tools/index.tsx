import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import LineCard from "../../components/card/LineCard";
import { mdiBrain, mdiCodeTags, mdiHospitalBuilding } from "@mdi/js";
import Svg from "../../components/svg/Svg";

export default function Base64() {
  return (
    <DefaultLayout type="short">
      <SEO
        description="Web and developer tools by Bruno Sabot"
        title="Web tools - Bruno Sabot"
      />
      <PageTitle>Tool list</PageTitle>
      <div style={{ paddingTop: "24px" }}>
        <LineCard
          icon={<Svg d={mdiHospitalBuilding} />}
          to="/tools/alcohol"
          title="Alcohol quantity"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/base-64"
          title="Base 64 encode and decode"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/bezier-curves"
          title="Bezier curves"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/rgb-convertor"
          title="Color converter"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/pretty"
          title="JSON prettifier"
        />
        <LineCard
          icon={<Svg d={mdiBrain} />}
          to="/tools/memory-table"
          title="Memory Table"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/photoshop-shadow"
          title="Photoshop shadow"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/sha"
          title="Sha generation"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/url-encode-decode"
          title="URL encode and decode"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/uuid"
          title="UUID and Nano ID generation"
        />
        <LineCard
          icon={<Svg d={mdiCodeTags} />}
          to="/tools/timestamp"
          title="Timestamp converter"
        />
      </div>
    </DefaultLayout>
  );
}
