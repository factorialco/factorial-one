import * as React from "react";
import { forwardRef } from "react";
const SvgChevronUp = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14L12 8", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14L12 8", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgChevronUp);
export default ForwardRef;
