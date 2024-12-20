import * as React from "react";
import { forwardRef } from "react";
const SvgArrowUp = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 11L12 5.00002L18 11", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19L12 5.50002", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
