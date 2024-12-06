import * as React from "react";
import { forwardRef } from "react";
const SvgMenu = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 7H18.9999", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H19", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 17H18.9999", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
