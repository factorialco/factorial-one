import * as React from "react";
import { forwardRef } from "react";
const SvgArrowRight = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13 6L19 12L13 18", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H18.5", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
