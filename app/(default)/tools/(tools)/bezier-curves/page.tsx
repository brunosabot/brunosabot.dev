import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBezierCurves from "./ToolBezierCurves";
import BlockTitle from "../../../../../components/typography/BlockTitle";

export async function generateMetadata() {
  return getMetaData({
    description: "Bezier Curves visualisation tool by Bruno Sabot",
    title: "Bezier Curves",
  });
}

export default function ToolBezierCurvesPage() {
  return (
    <>
      <PageTitle>Bezier curves</PageTitle>

      <ToolBezierCurves />

      <SimpleCard>
        <BlockTitle>
          Bezier Curve Visualizer Tool Helps You Learn About Bezier Curves
        </BlockTitle>

        <p>
          Our Bezier curve visualizer tool helps you understand and visualize
          the behavior of Bezier curves. It allows you to see how the curve
          changes in real-time as you interact with it. By hovering over a card,
          a live animation of the hovered curve will appear, showing how it
          moves and changes shape as you manipulate it. The visualizer is
          designed to provide a hands-on approach to learning about Bezier
          curves, making it an ideal tool for graphic designers, artists, and
          students studying computer graphics. With this tool, you can explore
          the behavior of Bezier curves, experiment with different control
          points, and gain a deeper understanding of how these curves work.
          Whether you&apos;re a beginner or an experienced user, this tool
          offers a fun and interactive way to learn about Bezier curves.
        </p>

        <p>
          <b>
            Here are some of the benefits of using the Bezier curve visualizer
            tool:
          </b>
        </p>
        <ul>
          <li>It can help you understand the behavior of Bezier curves.</li>
          <li>It can help you experiment with different control points.</li>
          <li>
            It can help you gain a deeper understanding of how Bezier curves
            work.
          </li>
          <li>It is a fun and interactive tool.</li>
          <li>
            It is an ideal tool for graphic designers, artists, and students
            studying computer graphics.
          </li>
        </ul>
        <p>
          <b>
            If you are looking for a way to learn about Bezier curves, the
            Bezier curve visualizer tool is a great resource. It is fun,
            interactive, and easy to use.
          </b>
        </p>
      </SimpleCard>
    </>
  );
}
