import React, { useState } from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import LineCard from "../../components/card/LineCard";
import {
  mdiBrain,
  mdiCodeTags,
  mdiHospitalBuilding,
  mdiRunFast,
} from "@mdi/js";
import Svg from "../../components/svg/Svg";
import FilterButton from "../../components/button/FilterButton";
import FlexCenter from "../../components/display/FlexCenter";

export default function Base64() {
  const [filter, setFilter] = useState("");

  return (
    <DefaultLayout type="short">
      <SEO
        description="Web and developer tools by Bruno Sabot"
        title="Web tools - Bruno Sabot"
      />
      <PageTitle>Tool list</PageTitle>

      <FlexCenter>
        <FilterButton
          active={filter === "code"}
          d={mdiCodeTags}
          onClick={() => setFilter(filter === "" ? "code" : "")}
        >
          Developer
        </FilterButton>
        <FilterButton
          active={filter === "health"}
          d={mdiHospitalBuilding}
          onClick={() => setFilter(filter === "" ? "health" : "")}
        >
          Health
        </FilterButton>
        <FilterButton
          active={filter === "brain"}
          d={mdiBrain}
          onClick={() => setFilter(filter === "" ? "brain" : "")}
        >
          Brain
        </FilterButton>
        <FilterButton
          active={filter === "sport"}
          d={mdiRunFast}
          onClick={() => setFilter(filter === "" ? "sport" : "")}
        >
          Sport
        </FilterButton>
      </FlexCenter>

      <div style={{ paddingTop: "24px" }}>
        {filter === "" || filter === "health" ? (
          <LineCard
            icon={<Svg d={mdiHospitalBuilding} />}
            to="/tools/alcohol/"
            title="Alcohol quantity"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/base-64/"
            title="Base 64 encode and decode"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/bezier-curves/"
            title="Bezier curves"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/chars-count/"
            title="Chars counter"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/rgb-convertor/"
            title="Color converter"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/pretty/"
            title="JSON prettifier"
          />
        ) : null}
        {filter === "" || filter === "brain" ? (
          <LineCard
            icon={<Svg d={mdiBrain} />}
            to="/tools/memory-table/"
            title="Memory Table"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/photoshop-shadow/"
            title="Photoshop shadow"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/sha/"
            title="Sha generation"
          />
        ) : null}
        {filter === "" || filter === "sport" ? (
          <LineCard
            icon={<Svg d={mdiRunFast} />}
            to="/tools/speed-convertor/"
            title="Speed convertor"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/url-encode-decode/"
            title="URL encode and decode"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/uuid/"
            title="UUID and Nano ID generation"
          />
        ) : null}
        {filter === "" || filter === "code" ? (
          <LineCard
            icon={<Svg d={mdiCodeTags} />}
            to="/tools/timestamp/"
            title="Timestamp converter"
          />
        ) : null}
      </div>
    </DefaultLayout>
  );
}
