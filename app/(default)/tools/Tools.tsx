"use client";

import {
  Activity,
  Binary,
  Brain,
  Code2,
  FileJson,
  Fingerprint,
  Footprints,
  Hash,
  Hourglass,
  Link,
  Palette,
  Spline,
  Type,
  Wine,
} from "lucide-react";
import { useState } from "react";

import Filter from "./components/Filter";
import Filters from "./components/Filters";
import List from "./components/List";
import Tool from "./components/Tool";

const getTools = () => {
  const tools = [
    {
      description: "Calculate alcohol content in your drinks.",
      href: "/tools/alcohol/",
      icon: Wine,
      title: "Alcohol quantity",
      type: "health",
    },
    {
      description: "Easily convert text to and from Base64.",
      href: "/tools/base-64/",
      icon: Binary,
      title: "Base 64 encode and decode",
      type: "code",
    },
    {
      description: "Create smooth curves for animations.",
      href: "/tools/bezier-curves/",
      icon: Spline,
      title: "Bezier curves",
      type: "code",
    },
    {
      description: "Count characters, words, and more in your text.",
      href: "/tools/chars-count/",
      icon: Type,
      title: "Chars counter",
      type: "code",
    },
    {
      description: "Convert between different color formats.",
      href: "/tools/rgb-convertor/",
      icon: Palette,
      title: "Color converter",
      type: "code",
    },
    {
      description: "Format JSON for easier reading.",
      href: "/tools/pretty/",
      icon: FileJson,
      title: "JSON prettifier",
      type: "code",
    },
    {
      description: "Improve your memory with this fun game.",
      href: "/tools/memory-table/",
      icon: Brain,
      title: "Memory Table",
      type: "brain",
    },
    {
      description: "Create CSS shadows from Photoshop.",
      href: "/tools/photoshop-shadow/",
      icon: Palette,
      title: "Photoshop shadow",
      type: "code",
    },
    {
      description: "Generate secure hash values.",
      href: "/tools/sha/",
      icon: Hash,
      title: "Sha generation",
      type: "code",
    },
    {
      description: "Convert between different speed units.",
      href: "/tools/speed-convertor/",
      icon: Activity,
      title: "Speed convertor",
      type: "sport",
    },
    {
      description:
        "Calculate your endurance index or estimate race duration for runners and coaches.",
      href: "/tools/endurance-index/",
      icon: Activity,
      title: "Endurance Index",
      type: "sport",
    },
    {
      description: "Encode and decode URLs easily.",
      href: "/tools/url-encode-decode/",
      icon: Link,
      title: "URL encode and decode",
      type: "code",
    },
    {
      description: "Generate unique identifiers.",
      href: "/tools/uuid/",
      icon: Fingerprint,
      title: "UUID and Nano ID generation",
      type: "code",
    },
    {
      description: "Convert timestamps to and from dates.",
      href: "/tools/timestamp/",
      icon: Hourglass,
      title: "Timestamp converter",
      type: "code",
    },
    {
      description: "Calculate your heart rate training zones.",
      href: "/tools/heart-rate-zones/",
      icon: Activity,
      title: "Heart rate zones",
      type: "sport",
    },
    {
      description:
        "Calculate distance, duration, and pace for your running program.",
      href: "/tools/running-program/",
      icon: Footprints,
      title: "Running Program Calculator",
      type: "sport",
    },
  ];

  return tools.sort((a, b) => a.title.localeCompare(b.title));
};

const getCategories = () => {
  return [
    { icon: Code2, title: "Developer", type: "code" },
    { icon: Wine, title: "Health", type: "health" },
    { icon: Brain, title: "Brain", type: "brain" },
    { icon: Activity, title: "Sport", type: "sport" },
  ];
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
            Icon={category.icon}
            key={category.type}
            onClick={() =>
              setFilter(filter !== category.type ? category.type : "")
            }
          >
            {category.title}
          </Filter>
        ))}
      </Filters>

      <List>
        {tools.map((tool) => {
          if (filter !== "" && filter !== tool.type) {
            return null;
          }

          return (
            <Tool
              description={tool.description}
              Icon={tool.icon}
              key={tool.href}
              name={tool.title}
              url={tool.href}
            />
          );
        })}
      </List>
    </>
  );
}
