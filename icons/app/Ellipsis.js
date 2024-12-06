import * as React from "react";
import { forwardRef } from "react";
const SvgEllipsis = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", transform: "rotate(90 12 12)", vectorEffect: "non-scaling-stroke" }),
    React.createElement("circle", { cx: 12, cy: 6.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 6.5)", vectorEffect: "non-scaling-stroke" }),
    React.createElement("circle", { cx: 12, cy: 17.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 17.5)", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgEllipsis);
export default ForwardRef;
