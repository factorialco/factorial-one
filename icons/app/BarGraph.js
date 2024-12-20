import * as React from "react";
import { forwardRef } from "react";
const SvgBarGraph = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M8 13L8 15", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 9L12 15", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 11L16 15", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgBarGraph);
export default ForwardRef;
