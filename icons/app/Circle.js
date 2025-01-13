import * as React from "react";
import { forwardRef } from "react";
const SvgCircle = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("rect", { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8, vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgCircle);
export default ForwardRef;
