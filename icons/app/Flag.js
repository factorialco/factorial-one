import * as React from "react";
import { forwardRef } from "react";
const SvgFlag = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 4V20", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
