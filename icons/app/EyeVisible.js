import * as React from "react";
import { forwardRef } from "react";
const SvgEyeVisible = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z", vectorEffect: "non-scaling-stroke" }),
    React.createElement("circle", { cx: 12, cy: 12, r: 2.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgEyeVisible);
export default ForwardRef;