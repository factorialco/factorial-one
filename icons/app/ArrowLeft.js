import * as React from "react";
import { forwardRef } from "react";
const SvgArrowLeft = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 18L5.00002 12L11 6.00002", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12L5.50002 12", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;