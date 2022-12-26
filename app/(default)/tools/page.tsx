"use client";

import React, { useState } from "react";
import PageTitle from "../../../components/typography/PageTitle";
import {
  mdiBrain,
  mdiCodeTags,
  mdiHospitalBuilding,
  mdiRunFast,
} from "@mdi/js";
import FlexCenter from "../../../components/display/FlexCenter";
import FilterButton from "../../../components/button/FilterButton";
import LineCard from "../../../components/card/LineCard";
import Svg from "../../../components/svg/Svg";

const getTools = () => {
  const tools = [
    {
      type: "health",
      icon: mdiHospitalBuilding,
      href: "/tools/alcohol/",
      title: "Alcohol quantity",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/base-64/",
      title: "Base 64 encode and decode",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/bezier-curves/",
      title: "Bezier curves",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/chars-count/",
      title: "Chars counter",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/rgb-convertor/",
      title: "Color converter",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/pretty/",
      title: "JSON prettifier",
    },
    {
      type: "brain",
      icon: mdiBrain,
      href: "/tools/memory-table/",
      title: "Memory Table",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/photoshop-shadow/",
      title: "Photoshop shadow",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/sha/",
      title: "Sha generation",
    },
    {
      type: "sport",
      icon: mdiRunFast,
      href: "/tools/speed-convertor/",
      title: "Speed convertor",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/url-encode-decode/",
      title: "URL encode and decode",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/uuid/",
      title: "UUID and Nano ID generation",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/timestamp/",
      title: "Timestamp converter",
    },
  ];

  return tools;
};

const getCategories = () => {
  const categories = [
    { type: "code", icon: mdiCodeTags, title: "Developer" },
    { type: "health", icon: mdiHospitalBuilding, title: "Health" },
    { type: "brain", icon: mdiBrain, title: "Brain" },
    { type: "sport", icon: mdiRunFast, title: "Sport" },
  ];

  return categories;
};

export default function ToolsPage() {
  const tools = getTools();
  const categories = getCategories();
  const [filter, setFilter] = useState("");

  return (
    <>
      <PageTitle>Tool list</PageTitle>

      <FlexCenter>
        {categories.map((category) => (
          <FilterButton
            active={filter === category.type}
            d={category.icon}
            onClick={() =>
              setFilter(filter !== category.type ? category.type : "")
            }
            key={category.type}
          >
            {category.title}
          </FilterButton>
        ))}
      </FlexCenter>

      <div style={{ paddingTop: "24px" }}>
        {tools.map((tool) => {
          if (filter !== "" && filter !== tool.type) {
            return null;
          }

          return (
            <LineCard
              icon={<Svg d={tool.icon} />}
              to={tool.href}
              title={tool.title}
              key={tool.href}
            />
          );
        })}
      </div>
    </>
  );
}
