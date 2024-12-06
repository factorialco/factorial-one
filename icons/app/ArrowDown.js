import * as React from "react";
import { forwardRef } from "react";
const SvgArrowDown = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 13L12 19L6.00002 13", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5L12 18.5", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
