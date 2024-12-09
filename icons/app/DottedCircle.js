import * as React from "react";
import { forwardRef } from "react";
const SvgDottedCircle = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgDottedCircle);
export default ForwardRef;
