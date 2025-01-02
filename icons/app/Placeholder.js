import * as React from "react";
import { forwardRef } from "react";
const SvgPlaceholder = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 6.5L6.5 17.5", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 17.5L6.5 6.5", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgPlaceholder);
export default ForwardRef;
