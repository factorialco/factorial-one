import * as React from "react";
import { forwardRef } from "react";
const SvgSearch = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
    React.createElement("rect", { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7, vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
