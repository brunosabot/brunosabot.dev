"use client";

import {
  mdiBrain,
  mdiCodeTags,
  mdiHospitalBuilding,
  mdiRunFast,
} from "@mdi/js";
import React, { useState } from "react";

import Filter from "./components/Filter";
import Filters from "./components/Filters";
import Tool from "./components/Tool";

const getTools = () => {
  const tools = [
    {
      description: "Calculate alcohol content in your drinks.",
      href: "/tools/alcohol/",
      icon: mdiHospitalBuilding,
      title: "Alcohol quantity",
      type: "health",
    },
    {
      description: "Easily convert text to and from Base64.",
      href: "/tools/base-64/",
      icon: mdiCodeTags,
      title: "Base 64 encode and decode",
      type: "code",
    },
    {
      description: "Create smooth curves for animations.",
      href: "/tools/bezier-curves/",
      icon: mdiCodeTags,
      title: "Bezier curves",
      type: "code",
    },
    {
      description: "Count characters, words, and more in your text.",
      href: "/tools/chars-count/",
      icon: mdiCodeTags,
      title: "Chars counter",
      type: "code",
    },
    {
      description: "Convert between different color formats.",
      href: "/tools/rgb-convertor/",
      icon: mdiCodeTags,
      title: "Color converter",
      type: "code",
    },
    {
      description: "Format JSON for easier reading.",
      href: "/tools/pretty/",
      icon: mdiCodeTags,
      title: "JSON prettifier",
      type: "code",
    },
    {
      description: "Improve your memory with this fun game.",
      href: "/tools/memory-table/",
      icon: mdiBrain,
      title: "Memory Table",
      type: "brain",
    },
    {
      description: "Create CSS shadows from Photoshop.",
      href: "/tools/photoshop-shadow/",
      icon: mdiCodeTags,
      title: "Photoshop shadow",
      type: "code",
    },
    {
      description: "Generate secure hash values.",
      href: "/tools/sha/",
      icon: mdiCodeTags,
      title: "Sha generation",
      type: "code",
    },
    {
      description: "Convert between different speed units.",
      href: "/tools/speed-convertor/",
      icon: mdiRunFast,
      title: "Speed convertor",
      type: "sport",
    },
    {
      description:
        "Calculate your endurance index or estimate race duration for runners and coaches.",
      href: "/tools/endurance-index/",
      icon: mdiRunFast,
      title: "Endurance Index",
      type: "sport",
    },
    {
      description: "Encode and decode URLs easily.",
      href: "/tools/url-encode-decode/",
      icon: mdiCodeTags,
      title: "URL encode and decode",
      type: "code",
    },
    {
      description: "Generate unique identifiers.",
      href: "/tools/uuid/",
      icon: mdiCodeTags,
      title: "UUID and Nano ID generation",
      type: "code",
    },
    {
      description: "Convert timestamps to and from dates.",
      href: "/tools/timestamp/",
      icon: mdiCodeTags,
      title: "Timestamp converter",
      type: "code",
    },
  ];

  return tools.sort((a, b) => a.title.localeCompare(b.title));
};

const getCategories = () => {
  const categories = [
    { icon: mdiCodeTags, title: "Developer", type: "code" },
    { icon: mdiHospitalBuilding, title: "Health", type: "health" },
    { icon: mdiBrain, title: "Brain", type: "brain" },
    { icon: mdiRunFast, title: "Sport", type: "sport" },
  ];

  return categories;
};

export default function Tools() {
  const tools = getTools();
  const categories = getCategories();
  const [filter, setFilter] = useState("");

  return (
    <>
      <Filters>
        {categories.map((category) => (
          <Filter
            active={filter === category.type}
            d={category.icon}
            key={category.type}
            onClick={() =>
              setFilter(filter !== category.type ? category.type : "")
            }
          >
            {category.title}
          </Filter>
        ))}
      </Filters>

      <div style={{ paddingTop: "24px" }}>
        {tools.map((tool) => {
          if (filter !== "" && filter !== tool.type) {
            return null;
          }

          return (
            <Tool
              description={tool.description}
              icon={tool.icon}
              key={tool.href}
              name={tool.title}
              url={tool.href}
            />
          );
        })}
      </div>
    </>
  );
}
