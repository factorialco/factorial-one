import * as React from "react";
import { forwardRef } from "react";
const SvgCheck = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 18L17.5 8.5", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 13L10.5 18", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;