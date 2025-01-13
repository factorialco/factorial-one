import * as React from "react";
import { forwardRef } from "react";
const SvgCheckCircleLine = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.00002 12L11.4 14.4L15 9.6", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgCheckCircleLine);
export default ForwardRef;
