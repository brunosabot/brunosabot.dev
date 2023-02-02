"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Columns from "../../../../../components/Columns";
import Input from "../../../../../components/form/Input";
import CubicBezierBlock from "../../../../../components/cubicBezier/CubicBezierBlock";

function enrich(value: string) {
  const intValue = parseInt(value, 10);
  const intNumber = isNaN(intValue) ? 0 : intValue;
  const withMax = Math.max(0, intNumber);
  const withMin = Math.min(1, withMax);

  return withMin;
}

export default function ToolBezierCurvesPage() {
  const [x1, setX1] = useState("0.25");
  const [y1, setY1] = useState("0.1");
  const [x2, setX2] = useState("0.25");
  const [y2, setY2] = useState("1");

  return (
    <>
      <PageTitle>Bezier curves</PageTitle>

      <Columns cols={2}>
        <Label label="X1">
          <Input onChange={(e) => setX1(e.target.value)} value={x1} />
        </Label>

        <Label label="Y2">
          <Input onChange={(e) => setY1(e.target.value)} value={y1} />
        </Label>

        <Label label="X2">
          <Input onChange={(e) => setX2(e.target.value)} value={x2} />
        </Label>

        <Label label="Y2">
          <Input onChange={(e) => setY2(e.target.value)} value={y2} />
        </Label>
      </Columns>

      <Columns cols={2}>
        <CubicBezierBlock
          x1={enrich(x1)}
          y1={enrich(y1)}
          x2={enrich(x2)}
          y2={enrich(y2)}
        />
        <CubicBezierBlock x1={0} y1={0} x2={1} y2={1} />
        <CubicBezierBlock x1={0} y1={0} x2={0.2} y2={1} />
        <CubicBezierBlock x1={0.4} y1={0} x2={0.6} y2={1} />
        <CubicBezierBlock x1={0.86} y1={0} x2={0.07} y2={1} />
        <CubicBezierBlock x1={0.22} y1={0.61} x2={0.36} y2={1} />
      </Columns>

      <SimpleCard>
        The tool is a Bezier curve visualizer that helps you understand and
        visualize the behavior of Bezier curves. It allows you to see how the
        curve changes in real-time as you interact with it. By hovering over a
        card, a live animation of the hovered curve will appear, showing how it
        moves and changes shape as you manipulate it. The visualizer is designed
        to provide a hands-on approach to learning about Bezier curves, making
        it an ideal tool for graphic designers, artists, and students studying
        computer graphics. With this tool, you can explore the behavior of
        Bezier curves, experiment with different control points, and gain a
        deeper understanding of how these curves work. Whether you&apos;re a
        beginner or an experienced user, this tool offers a fun and interactive
        way to learn about Bezier curves.
      </SimpleCard>
    </>
  );
}
