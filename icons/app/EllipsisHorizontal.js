import * as React from "react";
import { forwardRef } from "react";
const SvgEllipsisHorizontal = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("circle", { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("circle", { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgEllipsisHorizontal);
export default ForwardRef;
