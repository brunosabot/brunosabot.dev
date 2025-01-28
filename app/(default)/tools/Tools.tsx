"use client";

import React, { useState } from "react";
import {
  mdiBrain,
  mdiCodeTags,
  mdiHospitalBuilding,
  mdiRunFast,
} from "@mdi/js";
import Tool from "./components/Tool";
import Filter from "./components/Filter";
import Filters from "./components/Filters";

const getTools = () => {
  const tools = [
    {
      type: "health",
      icon: mdiHospitalBuilding,
      href: "/tools/alcohol/",
      title: "Alcohol quantity",
      description: "Calculate alcohol content in your drinks.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/base-64/",
      title: "Base 64 encode and decode",
      description: "Easily convert text to and from Base64.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/bezier-curves/",
      title: "Bezier curves",
      description: "Create smooth curves for animations.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/chars-count/",
      title: "Chars counter",
      description: "Count characters, words, and more in your text.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/rgb-convertor/",
      title: "Color converter",
      description: "Convert between different color formats.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/pretty/",
      title: "JSON prettifier",
      description: "Format JSON for easier reading.",
    },
    {
      type: "brain",
      icon: mdiBrain,
      href: "/tools/memory-table/",
      title: "Memory Table",
      description: "Improve your memory with this fun game.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/photoshop-shadow/",
      title: "Photoshop shadow",
      description: "Create CSS shadows from Photoshop.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/sha/",
      title: "Sha generation",
      description: "Generate secure hash values.",
    },
    {
      type: "sport",
      icon: mdiRunFast,
      href: "/tools/speed-convertor/",
      title: "Speed convertor",
      description: "Convert between different speed units.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/url-encode-decode/",
      title: "URL encode and decode",
      description: "Encode and decode URLs easily.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/uuid/",
      title: "UUID and Nano ID generation",
      description: "Generate unique identifiers.",
    },
    {
      type: "code",
      icon: mdiCodeTags,
      href: "/tools/timestamp/",
      title: "Timestamp converter",
      description: "Convert timestamps to and from dates.",
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
            onClick={() =>
              setFilter(filter !== category.type ? category.type : "")
            }
            key={category.type}
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
              key={tool.href}
              icon={tool.icon}
              name={tool.title}
              url={tool.href}
              description={tool.description}
            />
          );
        })}
      </div>
    </>
  );
}
