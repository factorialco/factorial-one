import * as React from "react";
import { forwardRef } from "react";
const SvgEnvelope = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4.5 9.5L11.1542 12.6053C11.6903 12.8555 12.3097 12.8555 12.8458 12.6053L19.5 9.5", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgEnvelope);
export default ForwardRef;