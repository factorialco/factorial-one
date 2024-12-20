import * as React from "react";
import { forwardRef } from "react";
const SvgCross = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.9497 7.05026L12 12L7.05025 16.9498", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12L7.05025 7.05026L16.9497 16.9498", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
